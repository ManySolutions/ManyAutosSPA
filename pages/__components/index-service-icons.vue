<template>
  <div class="w-100 pt-3 pb-3" style="background-color:#E5E5E5;">
    <v-container>
      <v-row class="top-h-icons text-center">
        <v-col cols="4" class="top-hi">
          <span class="d-block">
            <v-icon
            color="primary"
            >
            mdi-car-connected
            </v-icon>
            <span> FREE COLLECTION AND DELIVERY </span>
          </span>
        </v-col>
        <v-col cols="4" class="top-hi">
          <span class="d-block">
            <v-icon
            color="primary"
            >
            mdi-quality-high
            </v-icon>
            <span> TRUSTED HIGH QUALITY GARAGES </span>
          </span>
        </v-col>
        <v-col cols="4" class="top-hi">
          <span class="d-block">
            <v-icon
            color="primary"
            >
            mdi-security
            </v-icon>
            <span> 12 MONTH WARRANTY AND GUARANTEE </span>
          </span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
.top-h-icons {
//   padding-top: 30px;
  max-width: 500px;
  margin: 0px auto;
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
      color: #777;
    }
    span i {
      margin-bottom: 20px;
      font-size: 31px;
    //   color: white;
    }
  }
}
</style>