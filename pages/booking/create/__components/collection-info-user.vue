<template>
  <v-form 
    @submit.prevent="handleSubmit"
    ref='form'
  >
    <v-row>
      <v-col class='py-0'>
        <v-text-field
          v-model='f_name'
          label="First Name *"
          placeholder="John"
          filled
          rounded
          :error='!!errors["f_name"]'
          :persistent-hint='!!errors["f_name"]'
          :hint="errors['f_name'] ? errors['f_name'][0] : null"
          :rules="[v => !!v || 'First name is required']"
        ></v-text-field>
      </v-col>
      <v-col class='py-0'>
        <v-text-field
          v-model='s_name'
          label="Last Name *"
          placeholder="Doe"
          filled
          rounded
          :error='!!errors["s_name"]'
          :persistent-hint='!!errors["s_name"]'
          :hint="errors['s_name'] ? errors['s_name'][0] : null"
          :rules="[v => !!v || 'Last name is required']"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-text-field
      v-model='email'
      label="Your Email *"
      placeholder="example@xyz.com"
      filled
      rounded
      :error='!!errors["email"]'
      :persistent-hint='!!errors["email"]'
      :hint="errors['email'] ? errors['email'][0] : null"
      type='email'
      :rules="[
        v => !!v || 'Email is required',
        v => /.+@.+/.test(v) || 'Email must be valid',
      ]"
    ></v-text-field>
    <v-text-field
      v-model='password'
      label="Your Password *"
      placeholder="****"
      filled
      rounded
      :error='!!errors["password"]'
      :persistent-hint='!!errors["password"]'
      :hint="errors['password'] ? errors['password'][0] : null"
      type='password'
      :rules="[
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be atleast 6 characters' 
      ]"
    ></v-text-field>
    <v-select
      v-model='countryCode'
      :items='countryList'
      filled
      rounded
      :error='!!errors["country_code"]'
      :persistent-hint='!!errors["country_code"]'
      :hint="errors['country_code'] ? errors['country_code'][0] : null"
      label="Choose Country *"
      item-text='name'
      item-value='code'
    ></v-select>
    <v-text-field
      v-model='mobileNo'
      label="Mobile No. *"
      placeholder="71928974001"
      filled
      rounded
      :error='!!errors["mobile_no"]'
      :persistent-hint='!!errors["mobile_no"]'
      :hint="errors['mobile_no'] ? errors['mobile_no'][0] : null"
      :rules="[
        v => !!v || 'Mobile no. is required',
        v => v.length == 11 || 'Mobile no. must be 11 characters' 
      ]"
    ></v-text-field>
    <v-btn
      color='secondary'
      type='submit'
    >
      Next
    </v-btn>
  </v-form>
</template>

<script>
import { countryList } from '~/utils/vars';

export default {
  props: {
    errors: [Array, Object],
  },

  data: () => ({
    email: '',
    password: '',
    mobileNo: '',
    countryList,
    countryCode: '44',
    name: '',
    f_name: '',
    s_name: '',
  }),

  computed: {
  },

  watch: {
  },

  methods: {
    handleSubmit() {
      const isValid = this.$refs.form.validate();

      if (!isValid) {
        this.$emit('invalid');
        return;
      }

      const { 
        email, password, mobileNo, 
        countryCode, name, f_name, s_name
      } = this;

      this.$emit('user', {
        email, password, mobileNo, countryCode, name,
        f_name, s_name
      });
    }
  }
}
</script>