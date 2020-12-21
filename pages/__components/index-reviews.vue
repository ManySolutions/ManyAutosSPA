<template>
  <v-container 
    fluid
    class='mb-5 review'
  >
    <v-row>
      <v-col cols=12 class="mt-10 mb-7">
        <h1 class='heading__title heading__title--bar text-center text-white font-weight-300'>
          Our <span class='font-weight-bold'>Happy Customers</span>
        </h1>
      </v-col>
      <v-col 
        cols=12
        class='mb-4'
      >
        <v-carousel 
          v-model="model"
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item
            v-for="(review, i) in reviews"
            :key="i"
          >
            <v-sheet
              height="100%"
              class='py-4'
              color="blue-grey darken-2"
            >
              <v-row
                justify="center"
                align="center"
                class='fill-height'
              >
                <v-col>
                  <p class='text-center px-3 font-weight-300'>
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
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
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
    ],
  })
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    
}
.review {

    background-image: url("https://manyautosltd.com/assets/customer-v2/rowen-smith.jpg");
    background-size: cover;
    background-position: center center;
    // padding-top: 60px;
    // padding-bottom: 60px;
    position: relative;
}
.review:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000000a6;
}
.mb-55{
    margin-bottom: 55px;
}
h1.heading__title {
    font-size: 28px;
    /* position: relative; */
}
.heading__title--bar {
    padding-bottom: 10px;
}
.heading__title--bar:after {
    background: #CAF0F8;
}
.owl-carousel .owl-stage-outer {
    position: relative;
    overflow: hidden;
    // -webkit-transform: translate3d(0,0,0);
}
.owl-carousel .owl-stage-outer .owl-stage {
    transition: all 0.25s ease 0s;
    width: 1800px;
}
 .owl-carousel .owl-stage-outer .owl-stage .owl-item .card {
    background: #394f52;
    color: white;
    padding: 5px;
}
.card p {
    font-weight: 500;
    font-size: 18px;
}
.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
}
.card h5 {
    color: #1ea5c7;
    font-weight: 600;
}
.card-title {
    margin-bottom: 0.75rem;
}
</style>

