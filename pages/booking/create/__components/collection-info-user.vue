<template>
  <div>
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
      v-model='mobile_no'
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
    mobile_no: '',
    countryList,
    countryCode: '44',
  })
}
</script>