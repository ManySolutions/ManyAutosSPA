<template>
  <div>
    <v-text-field
      v-model='name'
      label="Full Name"
      placeholder="John doe"
      filled
      rounded
    ></v-text-field>
    <v-text-field
      v-model='email'
      label="Your Email"
      placeholder="example@xyz.com"
      filled
      rounded
      type='email'
    ></v-text-field>
    <v-text-field
      v-model='password'
      label="Your Password"
      placeholder="****"
      filled
      rounded
      type='password'
    ></v-text-field>
    <v-select
      v-model='countryCode'
      :items='countryList'
      filled
      rounded
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
    ></v-text-field>
  </div>
</template>

<script>
import { countryList } from '~/utils/vars';

export default {
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