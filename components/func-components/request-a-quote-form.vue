<template>
  <div style='max-width: 500px' class='m-auto'>
    <h1 class='heading__title text-center mb-10'>
      Get a <span class='primary--text'>Quote</span> For 
      <br />Your Repairs
    </h1>

    <v-form 
      v-if='step == 1'
      @submit.prevent="handleStep1"
      ref='step1'
    >
      <div 
        v-for='(item, i) in form.parts'
        :key='i'
        class='mb-5'
        :class='form.parts.length > 1 ? "d-table w-100" : ""'
      >
        <div :class='form.parts.length > 1 ? "d-table-cell" : ""'>
          <v-text-field
            outlined
            label="Name of the Repair"
            placeholder="i.e. Cooling System"
            class='mb-2'
            v-model="form.parts[i].name"
            :rules="[v => (v.length >= 1) || 'Part name is required with atleast 4 characters']"
            hide-details
          ></v-text-field>
          <v-textarea
            outlined
            label='Note for the problem'
            placeholder="Any message related to car part's problem"
            hide-details
            v-model="form.parts[i].info"
          ></v-textarea>
        </div>
        <div 
          v-if='form.parts.length > 1'
          class='d-table-cell text-right'  
        >
          <v-btn
            color='red darken-1'
            dark
            @click="handleRemove(i)"
            small
            class='ml-2'
            fab
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </div>
      <v-btn
        color='success darken-1'
        dark
        @click="handleAdd"
      >
        <v-icon>mdi-plus</v-icon>
        Add More
      </v-btn>
      <div class='mt-5'>
        <v-btn
          :color='isAuth ? "success" : "primary" '
          x-large
          block
          type='submit'
          :loading='isLoading'
        >
          {{ isAuth ? 'Request Quote Now' : 'Next' }}
        </v-btn>
      </div>
    </v-form>
    <!-- /step 1 -->
    <div v-if='step == 2'>
      <v-form
        @submit.prevent="handleStep2"
        ref='step2'
      >
        <v-row>
          <v-col>
            <v-text-field
              outlined
              label="First Name"
              v-model="form.f_name"
              :rules="[v => (v.length >= 1) || 'First name is required']"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              outlined
              label="Last Name"
              v-model="form.s_name"
              :rules="[v => (v.length >= 1) || 'Last name is required']"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-text-field
          outlined
          label="Email"
          v-model="form.email"
          :rules="[
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ]"
          type='email'
        ></v-text-field>
        <v-row class='mt-5'>
          <v-col>
            <v-btn
              x-large
              block
              @click="step = 1"
            >
              {{ 'Back' }}
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              :color='"success"'
              x-large
              block
              type='submit'
              :loading='isLoading'
            >
              {{ 'Request Quote Now' }}
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
    <!-- /step 2 -->
    <div v-if='step == 3'>
      <v-alert
        type='success'
      >
        <v-card elevation="0" color='success'>
          <v-card-title class='pt-0'>
            Quote Sent Successfully
          </v-card-title>
          <v-card-text>
            {{ successMessage }}
          </v-card-text>
          <v-card-actions>
            <v-btn
              @click='$emit("closeWindow")'
            >
              Close
            </v-btn>
            <v-btn
              @click='step = 1'
              color='primary'
            >
              Request another quote
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-alert>
    </div>
    <!-- /step 3 -->
  </div>
</template>
<script>
import toastr from 'toastr';
import {mapGetters, mapState} from 'vuex';
import { requestAQuote } from '~/api/booking';

const FORM = {
  parts: [
    {name: '', info: ''}
  ],
  f_name: '',
  s_name: '',
  email: '',
  model_id: '',
}

export default {
  props: {
  },
  data: () => ({
    form: {...FORM},
    step: 1,
    errors: {},
    isLoading: false,
    successMessage: '',
  }),
  computed: {
    ...mapGetters('user', ['isAuth']),
    ...mapState('booking', ['modelId']),
  },
  mounted () {
    this.form.model_id = this.modelId;
  },
  methods: {
    handleAdd() {
      this.form.parts.push(
        {name: '', info: ''}
      );
    },
    handleRemove(i) {
      this.$delete(this.form.parts, i);
    },
    handleStep1() {
      if ( !this.$refs.step1.validate() )
        return;

      if ( !this.isAuth )
        return this.step = 2

      this.handleSubmit();
    },
    handleStep2() {
      if (!this.$refs.step2.validate())
        return;

      this.handleSubmit();
    },
    handleSubmit() {
      this.errors = {};
      this.isLoading = true;
      this.successMessage = '';

      requestAQuote(this.form, this.http).then(res => {
        const { status, message, errors} = res;

        if (!status) {
          toastr.error(message);
          this.errors = errors;
          return;
        }

        toastr.success(message);
        this.$emit('success', message);
        this.successMessage = message;
        this.step = 3;
        this.form = {...this.form, ...FORM};
        this.form.parts = FORM.parts
      }).finally(() => this.isLoading = false)
    },
  }
}
</script>

<style lang="scss" scoped>
h1.heading__title {
  font-size: 38px;
  font-weight: 700;
  line-height: initial;
}
form {
  max-width: 400px;
  margin: 10px auto 0px;
}
</style>