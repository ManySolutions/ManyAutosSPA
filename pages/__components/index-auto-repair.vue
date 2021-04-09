<template>
  <div class="auto-repair-section w-100 pt-16 pb-16">
    <v-container>
      <v-row>
        <v-col cols="12" class="auto-sec text-center">
          <h1 class="auto-heading">
            AUTO REPAIR SERVICES
          </h1>
          <p>
            We offer a full range of garage services to vehicle owners located in Tucson area.<br>
            Our professinals know how to handle a wide range of car services.
          </p>
        </v-col>
      </v-row>
      <v-row class="card-sec">
        <v-col cols="12" md="4" class="card-1 text-center">
          <v-card
          class="mx-auto"
          max-width="400"
          elevation="0"
          >
          <v-img 
          class="white--text align-end" 
          height="250px" 
          src="https://static.manyautosltd.com/uploads/hands-mechanic-using-diagnostic-tool_800x533.jpg"
          >
          </v-img>
          <v-card-text class="text--primary text-left">
            <h4>ENGINE DIAGNOSTICS</h4>
          </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" class="card-2 text-center">
          <v-card
          class="mx-auto"
          max-width="400"
          elevation="0"
          >
          <v-img 
          class="white--text align-end" 
          height="250px" 
          src="https://static.manyautosltd.com/uploads/mechanic-man-pouring-engine-oil-car-engine_800x533.jpg"
          >
          </v-img>
          <v-card-text class="text--primary text-left">
            <h4>LUBE, OIL AND FILTERS</h4>
          </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" class="card-3 text-center">
          <v-card
          class="mx-auto"
          max-width="400"
          elevation="0"
          >
          <v-img 
          class="white--text align-end" 
          height="250px" 
          src="https://static.manyautosltd.com/uploads/closeup-old-timing-belt-with-many-cracks-engine-room_800x534.jpg"
          >
          </v-img>
          <v-card-text class="text--primary text-left">
            <h4>BELTS AND HOSES</h4>
          </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="text-center">
            <v-btn
            color="primary"
            x-large
            class="mt-5"
            >
            View All Services
            <v-icon>
                mdi-chevron-right
            </v-icon>
            </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
  .auto-repair-section .auto-sec .auto-heading {
    text-transform: capitalize;
    font-size: 33px;
    line-height: 44px;
    font-weight: 300;
    color: #333;
  }

  .auto-repair-section .auto-sec .auto-heading::after {
    display: block;
    content: "";
    background: #1E69B8;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    height: 2px;
  }

  .auto-repair-section .auto-sec p {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0px;
    line-height: 32px;
    margin-top: 34px;
    color: #777;
  }
.auto-repair-section .card-sec .white--text:hover{
    opacity: 0.8;
}
  .auto-repair-section .card-sec .card-1,.card-2,.card-3{
      padding: 0;
  }
  .auto-repair-section .card-sec .text--primary{
      background: #F5F5F5;
  }
  .auto-repair-section .card-sec h4{
    color: #333;
    font-weight: 500;
    font-size: 18px;
  }
</style>