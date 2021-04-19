<template>
  <v-card
    elevation="0"
  >
    <v-card-text
      class='pl-0'
    >
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="true"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Click Here To Choose Collection date *"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            filled
            rounded
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
          :allowed-dates="allowedDates"
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-card-text>
  </v-card>
</template>

<script>
import moment from 'moment';

export default {
  data: () => ({
    menu: false,
    date: new Date().toISOString().substr(0, 10),
  }),

  watch: {
    date(date) {
      this.$emit('change', date);
    }
  },

  methods: {
    allowedDates(val) {
      const day = moment().format('dddd').toLowerCase();
      const hour = moment().hour();
      let addDays = 1;

      if (day == 'friday') {
        if ( hour <= 12 ) {
          addDays = 3;
        } else {
          addDays = 4;
        }
      } else if (day == 'saturday') {
        addDays = 3;
      } else if (day == 'sunday') {
        addDays = 2;
      } else if (day == 'thursday' && hour >= 12) {
        addDays = 4;
      } else {
        if (hour >= 12) {
          addDays = 2;
        } else {
          addDays = 1;
        }
      }
      
      const dateToStart = moment().add(addDays, 'days').format('YYYY-MM-DD');
      var dt = moment(val, "YYYY-MM-DD HH:mm:ss");

      return dt.format('dddd') != 'Sunday' && moment(val).isSameOrAfter(dateToStart);
    }
  }
}
</script>