<template>
  <div class="auto-repair-section w-100 pt-16 pb-16">
    <v-container>
      <v-row>
        <v-col cols="12" class="auto-sec text-center">
          <h1 class="index-heading">AUTO REPAIR SERVICES</h1>
          <p>
            Our mechanics can handle vehicles of every make and model.<br />
            We offer professional auto service at affordable prices.
          </p>
        </v-col>
      </v-row>
      <v-row class="card-sec">
        <v-col cols="12" class="mb-4">
          <client-only>
            <carousel
              :perPageCustom="[
                [0, 1],
                [480, 2],
                [768, 3],
              ]"
              :pagination="false"
              hide-delimiters
            >
              <slide v-for="(review, i) in reviews" :key="i">
                <v-row justify="center" align="center" class="fill-height">
                  <v-col cols="12" class="card-1 text-center">
                    <v-card class="mx-auto" max-width="400" elevation="0">
                      <v-img class="white--text align-end" :src="review.src">
                      </v-img>
                      <v-card-text class="text--primary text-left">
                        <h4>{{ review.name }}</h4>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </slide>
            </carousel>
          </client-only>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-btn 
            color="primary" 
            x-large 
            class="mt-5" 
            @click="handleClick"
          >
            Get Repairs Quote
            <v-icon> mdi-chevron-right </v-icon>
          </v-btn>
          <br>
          <nuxt-link to='/car-repairs' class='d-inline-block mt-2'>
            Read More 
            <v-icon small color='primary' class='d-inline-block'>mdi-chevron-double-right</v-icon>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => ({
    model: 0,
    reviews: [
      {
        src:
          "https://static.manyautosltd.com/uploads/hands-mechanic-using-diagnostic-tool_800x533.jpg",
        name: "ENGINE DIAGNOSTICS",
      },
      {
        src:
          "https://static.manyautosltd.com/uploads/mechanic-man-pouring-engine-oil-car-engine_800x533.jpg",
        name: "LUBE, OIL AND FILTERS",
      },
      {
        src:
          "https://static.manyautosltd.com/uploads/closeup-old-timing-belt-with-many-cracks-engine-room_800x534.jpg",
        name: "BELTS AND HOSES",
      },
      {
        src:
          "https://static.manyautosltd.com/uploads/male-hands-holding-air-gun-car-wheel_800x533.jpg",
        name: "TYRES MAINTENANCE",
      },
      {
        src:
          "https://static.manyautosltd.com/uploads/hand-technician-wearing-gloves-repairing-car-brake_800x533.jpg",
        name: "AIR SUSPENSION",
      },
    ],
  }),

  methods: {
    handleClick() {
      this.$store.commit('settings/SET_REDIRECT', {
        to: '/booking/create/parts',
        referrer: 'car-reg'
      });

      this.$store.commit('booking/TOGGLE_REG_DIALOG', true);
    }
  }
};
</script>
<style lang="scss" scoped>
.auto-repair-section .auto-sec p {
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 32px;
  margin-top: 34px;
  color: #777;
}
.auto-repair-section .card-sec .white--text:hover {
  opacity: 0.8;
}
.auto-repair-section .card-sec .card-1,
.card-2,
.card-3 {
  padding: 0;
}
.auto-repair-section .card-sec .text--primary {
  background: #f5f5f5;
}
.auto-repair-section .card-sec h4 {
  color: #333;
  font-weight: 500;
  font-size: 18px;
}
</style>