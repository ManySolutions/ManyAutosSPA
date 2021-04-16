<template>
  <div
    class='home-sec-gaps home-reviews w-100'
  >
    <v-container class='what-we-do'>
      <v-row>
        <v-col cols=12 class="mb-7">
          <h1 class='heading__title text-center'>
            What We Do 
          </h1>
        </v-col>
        <v-col 
          cols=12
          class='mb-4'
        >
          <client-only>
            <carousel :perPageCustom="[[0, 1], [480, 2], [768, 3]]" :pagination='false'>
              <slide
                v-for="(review, i) in reviews"
                :key="i"
              >
                <v-sheet
                  height="95%"
                  class='py-4 mx-3 my-3'
                  color="white"
                  elevation="3"
                  rounded
                >
                  <v-row
                    justify="center"
                    align="center"
                    class='fill-height'
                  >
                    <v-col>
                        <div class="text-center mx-auto my-auto">
                        <v-icon
                        color="primary"
                        x-large
                        >
                            {{review.icon}}
                        </v-icon>
                        <h2 class="text-center pt-2 pb-2" style="color:#01133c;">
                            {{review.title}}
                        </h2>
                        </div>
                      <div>
                        <p class='text-center px-3 font-weight-400 font-19' style="color:#777;">
                        "{{ review.content }}" 
                      </p>
                      </div>
                    </v-col>
                  </v-row>
                </v-sheet>
              </slide>
            </carousel>
          </client-only>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: { },
  data: () => ({
    model: 0,
    reviews: [
      {
        icon:'mdi-tools',
        title:'Services',
        content: 'We offer all types of services. You can get the interim service or the full service depending on the condition of your vehicle.',
      },
      {
        icon:'mdi-car-defrost-front',
        title:'Overheating Engine',
        content: `We inspect the vehicle, diagnose the cause of overheating, and fix the issue in less than 24 hours.`,
      },
      {
        icon:'mdi-car-cog',
        title:'Problem with the Engine',
        content: `We tend to diagnose and resolve almost all the issues regarding the engine of your vehicle.`,
      },
      {
        icon:'mdi-car-multiple',
        title:'Accident Repair',
        content: `We repair all the parts of the vehicle damaged due to an accident and we also respray them.`,
      },
      {
        icon:'mdi-car-info',
        title:'MOT',
        content: `You can do an advance booking for your MOT. We have our own MOT centres with DVSA approved examiners.`,
      },
    ],
  })
}
</script>

<style lang="scss" scoped>
  ::v-deep {
    .VueCarousel-pagination {
      display: none;
    }
    .VueCarousel-wrapper {
      min-height: 290px;
    }
  }

.what-we-do .heading__title {
    font-size: 40px;
    color: #01133c;
    text-align: center;
}
  @media (min-width: 960px) {
      .home-sec-gaps {
          background-color: #eff2f2;
      }
  }
.home-sec-gaps .fill-height h2 {
    color: #ef0f3a;;
}

</style>

