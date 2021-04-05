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
                  height="96%"
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
                            mdi-tools
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
        // icon:'mdi-tools',
        title:'Free Loaner',
        content: `Excellent MOT pick up and drop off service especially during this lockdown period. Would definitely recommend as it saves a lot of hassle having to wait while the MOT gets done. Will 100% use again.`,
      },
      {
        // icon:'mdi-tools',
        title:'Free Loaner',
        content: `Thank you for saving my Hyundai Getz from scrapping. Great team resolved my car problem for less than 24 hours. I highly recommend Many Autos.`,
      },
      {
        // icon:'mdi-tools',
        title:'Free Loaner',
        content: `My car battery was completely drained today and left with no options. Lots of Thanks to Many Autos for the timely help. Very professional and definitely recommendable.`,
      },
      {
          title:'Free Loaner',
        content: `Many Autos have done my MOT 2 years in a row.  They are brilliant value with great customer service including offering a free drop off and pick up service.  I will be using them again next year as well.`,
      },
      {
          title:'Free Loaner',
        content: `Great customer service good prices very pleased`,
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

