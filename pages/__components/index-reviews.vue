<template>
  <div
    class='home-sec-gaps home-reviews w-100'
    :style='`background-image: url(${assets("customer-v2/rowen-smith.jpg")})`'
  >
    <v-container class='home-r-in'>
      <v-row>
        <v-col cols=12 class="mb-7">
          <h1 class='heading__title text-center font-weight-300'>
            Our <span class='font-weight-bold'>Happy Customers</span>
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
                  height="100%"
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
                      <p class='text-center px-3 font-weight-300 font-19'>
                        "{{ review.content }}" 
                      </p>
                      <h5 class="text-h6 card-title text-center">
                        <span class='text-primary'>
                          {{ review.name }}
                        </span>
                        <v-rating
                          color="yellow accent-4"
                          length="5"
                          :value="review.stars"
                          class='d-inline-block'
                          dense
                        ></v-rating>
                      </h5>
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
//       {
//         content: `I booked my Golf for an MOT and full service, the price quoted on the website was transparent and competitive. The collection driver was extremely polite and professional. I was updated on any extra work required and quoted the costs involved to resolve. The whole journey with Many Autos was a delight and my car is so smooth to drive... Many Autos ALL THE WAY`,
//         name: 'AKO Fam',
//         stars: 5
//       },
//       {
//         content: `I am here now for brake replacement. These guys are amazing. They told me what was wrong and how much will cost me. No additional prices and no last minute fault finding. I am impressed how knowledgeable they are and how they treat their clients. No wonder they get 5 stars from everyone. Will come back. Thank you Many Autos.`,
//         name: 'Ionut Vlad',
//         stars: 5,
//       },
//       {
//         content: `Fantastic service, will use them for all future services and would highly recommend.
// They collected and dropped off my car,  the guy who came was very friendly and professional, and he arrived in the time frame promised.
// He also took photos of the car before taking it (I actually meant to do that but forgot, so glad it's common practise) and he drove my car away safely, going slowly over the large bump that leads out of my car park.
// Thank you very much for an efficient and hassle-free service`,
//         name: 'Rachel Finn',
//         stars: 5,
//       },
      {
        content: `Excellent MOT pick up and drop off service especially during this lockdown period. Would definitely recommend as it saves a lot of hassle having to wait while the MOT gets done. Will 100% use again.`,
        name: 'Naz Rasool',
        stars: 5,
      },
      {
        content: `Thank you for saving my Hyundai Getz from scrapping. Great team resolved my car problem for less than 24 hours. I highly recommend Many Autos.`,
        name: 'Klara Bogdanova',
        stars: 5,
      },
      {
        content: `My car battery was completely drained today and left with no options. Lots of Thanks to Many Autos for the timely help. Very professional and definitely recommendable.`,
        name: 'Sridevi Mahendra',
        stars: 5,
      },
      {
        content: `Many Autos have done my MOT 2 years in a row.  They are brilliant value with great customer service including offering a free drop off and pick up service.  I will be using them again next year as well.`,
        name: 'Jessica Woodrow',
        stars: 5,
      },
      {
        content: `Great customer service good prices very pleased`,
        name: 'Asif Rashid',
        stars: 5,
      },
    ],
  })
}
</script>

<style lang="scss" scoped>
.home-reviews {
  background-size: cover;
  background-position: center center;
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgb(255 255 255 / 94%);
  }
  @media (min-width: 960px) {
    .home-r-in {
      max-width: 1400px;
      margin-left: auto;
      margin-right: auto;
    }
    .heading__title {
      margin-bottom: 10px;
    }
  }
  ::v-deep {
    .VueCarousel-pagination {
      display: none;
    }
    .VueCarousel-wrapper {
      min-height: 290px;
    }
  }
}
</style>

