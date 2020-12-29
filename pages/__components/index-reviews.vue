<template>
  <div
    class='home-sec-gaps home-reviews w-100'
    :style='`background-image: url(${assets("customer-v2/rowen-smith.jpg")})`'
  >
    <v-container class='home-r-in'>
      <v-row>
        <v-col cols=12 class="mb-7">
          <h1 class='heading__title heading__title--bar text-center text-white font-weight-300'>
            Our <span class='font-weight-bold'>Happy Customers</span>
          </h1>
        </v-col>
        <v-col 
          cols=12
          class='mb-4'
        >
          <base-owl-carousel>
            <v-sheet
              v-for="(review, i) in reviews"
              :key="i"
              height="100%"
              class='py-4'
              color="blue-grey darken-2"
              dark
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
                    <small>
                      {{ review.date }}
                    </small>
                  </h5>
                </v-col>
              </v-row>
            </v-sheet>
          </base-owl-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import baseOwlCarousel from '~/components/base-components/base-owl-carousel.vue'
export default {
  components: { baseOwlCarousel },
  data: () => ({
    model: 0,
    reviews: [
      {
        content: `Really happy with the service. Very professional and friendly team. 
          I originally took my car to another mechanic who didn’t do a good job 
          so I brought it`,
        name: 'Mrs Maria',
        date: 'Nov 13 2019',
      },
      {
        content: `Called as drivers window wouldn’t go up. Said to come right away 
          fixed within an hour. Excellent service and company!! 
          Really recommend!!`,
        name: 'Gollette Gardner',
        date: 'Mar 10 2020',
      },
      {
        content: `C Called as drivers window wouldn’t go up. Said to come right away 
          fixed within an hour. Excellent service and company!! 
          Really recommend!!`,
        name: 'Gollette Gardner',
        date: 'Mar 10 2020',
      },
      {
        content: `D Called as drivers window wouldn’t go up. Said to come right away 
          fixed within an hour. Excellent service and company!! 
          Really recommend!!`,
        name: 'Gollette Gardner',
        date: 'Mar 10 2020',
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
    background: #000000a6;
  }
  @media (min-width: 960px) {
    .home-r-in {
      max-width: 1400px;
      margin-left: auto;
      margin-right: auto;
    }
    .heading__title {
      margin-bottom: 60px;
    }
  }
}
</style>

