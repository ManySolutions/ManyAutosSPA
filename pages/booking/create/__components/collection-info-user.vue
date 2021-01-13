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
          :error='!!errors["user.f_name"]'
          :hint="errors['user.f_name'] ? errors['user.f_name'][0] : null"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model='s_name'
          label="Last Name"
          placeholder="John doe"
          filled
          rounded
          :error='!!errors["user.s_name"]'
          :hint="errors['user.s_name'] ? errors['user.s_name'][0] : null"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-text-field
      v-model='email'
      label="Your Email"
      placeholder="example@xyz.com"
      filled
      rounded
      :error='!!errors["user.email"]'
      :hint="errors['user.email'] ? errors['user.email'][0] : null"
      type='email'
    ></v-text-field>
    <v-text-field
      v-model='password'
      label="Your Password"
      placeholder="****"
      filled
      rounded
      :error='!!errors["user.password"]'
      :hint="errors['user.password'] ? errors['user.password'][0] : null"
      type='password'
    ></v-text-field>
    <v-select
      v-model='countryCode'
      :items='countryList'
      filled
      rounded
      :error='!!errors["user.countryCode"]'
      :hint="errors['user.countryCode'] ? errors['user.countryCode'][0] : null"
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
      :error='!!errors["user.mobileNo"]'
      :hint="errors['user.mobileNo'] ? errors['user.mobileNo'][0] : null"
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
  }),

  computed: {
    isFormValid() {
      const { email, password, mobileNo, countryCode, name} = this;

      return ( email && password && mobileNo && countryCode && name );
    }
  },

  watch: {
    $data: {
      handler(data) {
        const { isFormValid } = this;

        if (!isFormValid) {
          this.$emit('invalid');
        }
        
        const { email, password, mobileNo, countryCode, name} = data;

        this.$emit('user', {
          email, password, mobileNo, countryCode, name
        });
      },
      
      deep: true,
    }
  }
}
</script>