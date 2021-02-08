<template>
  <v-form @submit.prevent="handleSubmit()">
    <v-autocomplete
      label="Choose Manufacturer"
      outlined
      hide-details
      class="mb-2"
      v-model="form.manufacturer"
      :items='manufacturers'
      :loading='loaders.manufacturer'
      item-text='Name'
      item-value='Code'
    ></v-autocomplete>
    <v-autocomplete
      :label="'Choose Model'"
      :placeholder="!ranges.length ? 'Select Manufacturer First' : 'Choose Model'"
      outlined
      hide-details
      class="mb-2"
      v-model="form.range"
      :items='ranges'
      :loading='loaders.range'
      :disabled='!ranges.length'
      item-text='Range'
      item-value='Range_Code'
    ></v-autocomplete>
    <v-autocomplete
      :label="'Choose Make Year'"
      :placeholder="!years.length ? 'Select Model First' : 'Choose Make Year'"
      outlined
      hide-details
      class="mb-2"
      v-model="form.year"
      :items='years'
      :loading='loaders.year'
      :disabled='!years.length'
      item-text='Year'
      item-value='Year'
    ></v-autocomplete>
    <v-autocomplete
      :label="'Choose Fuel Type'"
      :placeholder="!fuels.length ? 'Select Make Year First' : 'Choose Fuel Type'"
      outlined
      hide-details
      class="mb-2"
      v-model="form.fuel"
      :items='fuels'
      :loading='loaders.fuel'
      :disabled='!fuels.length'
      item-text='Fuel'
      item-value='Fuel'
    ></v-autocomplete>
    <v-autocomplete
      :label="'Choose Transmission'"
      :placeholder="!transmissions.length ? 'Select Fuel Type First' : 'Choose Transmission'"
      outlined
      hide-details
      class="mb-2"
      v-model="form.transmission"
      :items='transmissions'
      :loading='loaders.transmission'
      :disabled='!transmissions.length'
      item-text='Transmission'
      item-value='Transmission'
    ></v-autocomplete>
    <v-autocomplete
      :label="'Choose Fuel Capacity'"
      :placeholder="!cubicCapacities.length ? 'Select Transmission First' : 'Choose Fuel Capacity'"
      outlined
      hide-details
      class="mb-2"
      v-model="form.cubic_capacity"
      :items='cubicCapacities'
      :loading='loaders.cubic_capacity'
      :disabled='!cubicCapacities.length'
      item-text='CC'
      item-value='CC'
    ></v-autocomplete>
    <v-btn 
      color="secondary" 
      block 
      large 
      type="submit" 
      :loading="isLoading"
      :disabled='!isFormValid'
    >
      Find Vehicle
    </v-btn>
  </v-form>
</template>

<script>
import http from '~/utils/http';
export default {
  data: () => ({
    form: {
      manufacturer: '',
      range: '',
      year: '',
      fuel: '',
      transmission: '',
      cubic_capacity: '',
    },
    manufacturers: [],
    ranges: [],
    years: [],
    fuels: [],
    transmissions: [],
    cubicCapacities: [],
    isLoading: false,
    loaders: {
      manufacturer: false,
      range: false,
      year: false,
      fuel: false,
      transmission: false,
      cubic_capacity: false,
    }
  }),
  computed: {
    isFormValid() {
      const {manufacturer, range, year, fuel, transmission} = this.form;

      return manufacturer && range && year && fuel && transmission;
    }
  },
  watch: {
    'form.manufacturer': {
      handler() {
        const {manufacturer} = this.form;
        this.loaders.range = true;
        this.form.range = '';

        http.post('/vehicle/options/RANGE', {manufacturer})
          .then(res => res.data)
          .then(res => this.ranges = res.data)
          .finally(() => this.loaders.range = false);
      },
      deep: true,
    },
    'form.range': {
      handler() {
        const {manufacturer, range} = this.form;
        this.loaders.year = true;
        this.form.year = '';

        http.post('/vehicle/options/YEAR', {manufacturer, range})
          .then(res => res.data)
          .then(res => this.years = res.data)
          .finally(() => this.loaders.year = false);
      },
      deep: true,
    },
    'form.year': {
      handler() {
        const {manufacturer, range, year} = this.form;
        this.loaders.fuel = true;
        this.form.fuel = '';

        http.post('/vehicle/options/FUEL', {manufacturer, range, year})
          .then(res => res.data)
          .then(res => this.fuels = res.data)
          .finally(() => this.loaders.fuel = false);
      },
      deep: true,
    },
    'form.fuel': {
      handler() {
        const {manufacturer, range, year, fuel} = this.form;
        this.loaders.transmission = true;
        this.form.transmission = '';

        http.post('/vehicle/options/TRANSMISSION', {manufacturer, range, year, fuel})
          .then(res => res.data)
          .then(res => this.transmissions = res.data)
          .finally(() => this.loaders.transmission = false);
      },
      deep: true,
    },
    'form.transmission': {
      handler() {
        const {manufacturer, range, year, fuel, transmission} = this.form;
        this.loaders.cubic_capacity = true;
        this.form.cubic_capacity = '';

        http.post('/vehicle/options/CC', {manufacturer, range, year, fuel, transmission})
          .then(res => res.data)
          .then(res => this.cubicCapacities = res.data.map(v => ({
            ...v, 
            CC: parseFloat(v.CC).toFixed(1)
          })))
          .finally(() => this.loaders.cubic_capacity = false);
      },
      deep: true,
    },
    isLoading(isLoading) {
      this.$emit('loading', isLoading);
    }
  },
  mounted () {
    this.getManufacturers();
  },
  methods: {
    getManufacturers() {
      this.loaders.manufacturer = true;

      http.get('/manufacturers').then(res => res.data)
        .then(res => this.manufacturers = res)
        .finally(() => this.loaders.manufacturer = false)
    },
    handleSubmit() {
      this.isLoading = true;
      
      http.post('/vehicle/find', this.form).then(res => res.data)
        .then(res => this.$emit('vehicles', res.data))
        .finally(() => this.isLoading = false)
    }
  }
}
</script>