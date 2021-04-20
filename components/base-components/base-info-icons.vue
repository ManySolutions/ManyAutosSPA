<template>
  <v-row class="top-h-icons" :class='dark ? `black--text` : ``'>
    <v-col cols="4" class="top-hi">
      <span class="d-block">
        <v-icon>mdi-car-connected</v-icon>
        <span> FREE COLLECTION AND DELIVERY </span>
      </span>
    </v-col>
    <v-col cols="4" class="top-hi">
      <span class="d-block">
        <v-icon>mdi-quality-high</v-icon>
        <span> TRUSTED HIGH QUALITY GARAGES </span>
      </span>
    </v-col>
    <v-col cols="4" class="top-hi">
      <span class="d-block">
        <v-icon>mdi-security</v-icon>
        <span> 12 MONTH WARRANTY AND GUARANTEE </span>
      </span>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    dark: Boolean,
  }
}
</script>
<style lang="scss" scoped>
.top-h-icons {
  max-width: 500px;
  margin: 0px auto;
  color: white;
  .top-hi {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    position: relative;
    &:not(:last-child):after {
      content: "";
      position: absolute;
      right: 0;
      height: 70%;
      width: 1px;
      background: #3636361a;
      top: 50%;
      transform: translateY(-50%);
    }
    span {
      font-size: 12px;
      display: block;
      max-width: 280px;
      margin: 0px auto;
    }
    span i {
      margin-bottom: 20px;
      font-size: 31px;
      color: white;
    }
  }
  &.black--text .top-hi span i {
    color: rgba(0, 0, 0, 0.54);
  }
}
</style>