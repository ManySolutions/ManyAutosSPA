<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field
          v-model='f_name'
          label="First Name"
          placeholder="John"
          filled
          rounded
          :error='!!errors["f_name"]'
          :persistent-hint='!!errors["f_name"]'
          :hint="errors['f_name'] ? errors['f_name'][0] : null"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model='s_name'
          label="Last Name"
          placeholder="Doe"
          filled
          rounded
          :error='!!errors["s_name"]'
          :persistent-hint='!!errors["s_name"]'
          :hint="errors['s_name'] ? errors['s_name'][0] : null"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-text-field
      v-model='email'
      label="Your Email"
      placeholder="example@xyz.com"
      filled
      rounded
      :error='!!errors["email"]'
      :persistent-hint='!!errors["email"]'
      :hint="errors['email'] ? errors['email'][0] : null"
      type='email'
    ></v-text-field>
    <v-text-field
      v-model='password'
      label="Your Password"
      placeholder="****"
      filled
      rounded
      :error='!!errors["password"]'
      :persistent-hint='!!errors["password"]'
      :hint="errors['password'] ? errors['password'][0] : null"
      type='password'
    ></v-text-field>
    <v-select
      v-model='countryCode'
      :items='countryList'
      filled
      rounded
      :error='!!errors["country_code"]'
      :persistent-hint='!!errors["country_code"]'
      :hint="errors['country_code'] ? errors['country_code'][0] : null"
      label="Choose Country"
      item-text='name'
      item-value='code'
    ></v-select>
    <v-text-field
      v-model='mobileNo'
      label="Mobile No."
      placeholder="71928974001"
      filled
      rounded
      :error='!!errors["mobile_no"]'
      :persistent-hint='!!errors["mobile_no"]'
      :hint="errors['mobile_no'] ? errors['mobile_no'][0] : null"
    ></v-text-field>
  </div>
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
    isFormValid() {
      const { email, password, mobileNo, countryCode, name, f_name, s_name} = this;

      return ( 
        email != '' 
        && password != '' 
        && mobileNo != '' 
        && countryCode != '' 
        && f_name != '' 
        && s_name != '' 
      );
    }
  },

  watch: {
    $data: {
      handler(data) {
        const { isFormValid } = this;

        if (!isFormValid) {
          this.$emit('invalid');
        }
        
        const { email, password, mobileNo, countryCode, name, f_name, s_name} = data;

        this.$emit('user', {
          email, password, mobileNo, countryCode, name,
          f_name, s_name
        });
      },
      
      deep: true,
    }
  }
}
</script>