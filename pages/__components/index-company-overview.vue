<template>
  <div class="company-review-sec w-100 pt-16 pb-16">
    <v-container>
        <v-row>
        <v-col cols="12" class="company-sec text-center">
          <h1 class="company-heading">
            COMPANY OVERVIEW
          </h1>
          <p>
            We can help you with everything from an oil change to an engine change.<br>
            We can handle any problem on both foreign and domestic vehicles.
          </p>
        </v-col>
      </v-row>
      <v-row class="inner-text-row">
        <v-col cols="12" sm="6" md="4" 
        v-for="(item , i) in items"
        :key="i">
        <v-card           
        elevation="0"
        >
        <v-list-item-title class="headline mb-1 pl-3">
          <h5>{{item.title}}</h5>
        </v-list-item-title>
            <v-list-item 
            three-line
            >
            <v-list-item-avatar 
              tile 
              size="60" 
              >
            <v-img
              class="elevation-6"
              alt=""
              :src="item.avatar"
            >
            </v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-text 
                class="inner-text"
                >
                {{item.subtitle}}
                </v-list-item-text>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          avatar: 'https://static.manyautosltd.com/uploads/car-audio-service-48x48.png',
          title: 'CAR AUDIO SERVICE',
          subtitle: `Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.`,
        },
        {
          avatar: 'https://static.manyautosltd.com/uploads/oil-change-2nd-option.png',
          title: 'FREE OIL CHANGE',
          subtitle: `Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.`,
        },
        {
          avatar: 'https://static.manyautosltd.com/uploads/engine-diagnostics.png',
          title: 'ENGINE DIAGNOSTICS',
          subtitle: `Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.`,
        },
        {
          avatar: 'https://static.manyautosltd.com/uploads/car-ac-recharge-48x48.png',
          title: 'CAR A/C RECHARGE',
          subtitle: `Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.`,
        },
        {
          avatar: 'https://static.manyautosltd.com/uploads/sensor-callibration-48x48.png',
          title: 'PARKING SENSORS CALIBRATION',
          subtitle: `Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.`,
        },
        {
          avatar: 'https://static.manyautosltd.com/uploads/Car-battery-Repairs-2nd-Option.png',
          title: 'CAR BATTERY REPAIRS',
          subtitle: `Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.`,
        },
      ],
    }),
  }
</script>
<style lang="scss" scoped>
  .company-review-sec .company-sec .company-heading {
    text-transform: capitalize;
    font-size: 33px;
    line-height: 44px;
    font-weight: 300;
    color: #333;
  }

  .company-review-sec .company-sec .company-heading::after {
    display: block;
    content: "";
    background: #1E69B8;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    height: 2px;
  }

  .company-review-sec .company-sec p {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0px;
    line-height: 32px;
    margin-top: 34px;
    color: #777;
  }
  .company-review-sec h5{
    color: #333;
    font-weight: 500;
  }
  .company-review-sec .inner-text-row .inner-text {
    font-size: 14px;
    line-height: 24px;
    color: #777;
  }
</style>
