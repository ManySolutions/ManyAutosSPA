<template>
  <div class="w-100 testimonial-sec"
    style="background-image: url(https://static.manyautosltd.com/uploads/various-work-tools-worktop_800x533.jpg)">
<div class="testimonialsec">
        <v-container>
      <v-row>
        <v-carousel 
        v-model="model" 
        hide-delimiters
        >
          <v-carousel-item 
          v-for="(review, i) in reviews" 
          :key="i"
          >
            <v-sheet 
            color="transparent"   
            height="100%" 
            tile
            >
            <v-row class="fill-height" align="center" justify="center">
                <v-col cols="9" class="text-center">
                    <div class="hexagon">
                      <div class="sl-small-user-chat text-center">
                          <v-icon
                          color="white"
                          class="choose-icon pt-2"
                          x-large
                          style="font-size:54px;"
                          >
                              {{review.icon}}
                          </v-icon>
                      </div>
                    </div>
                      <p class='text-center mt-15 px-3 font-weight-300 font-19'>
                        "{{ review.content }}" 
                      </p>
                      <h5 class="text-h6 card-title text-center">
                        <span class='text-primaryy' style="color:white;">
                          {{ review.name }}
                        </span>
                        <div>
                        <v-rating
                          color="yellow accent-4"
                          length="5"
                          :value="review.stars"
                          class='d-inline-block'
                          dense
                          readonly
                        ></v-rating>
                        </div>
                      </h5>
                </v-col>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </v-container>
</div>
  </div>
</template>
<script>
export default {
  components: { },
  data: () => ({
    model: 0,
    reviews: [
      {
        icon:'mdi-lead-pencil',  
        content: `My car battery was completely drained today and left with no options. Lots of Thanks to Many Autos for the timely help. Very professional and definitely recommendable.`,
        name: 'Sridevi Mahendra',
        stars: 5,
      },
      {
        icon:'mdi-lead-pencil',
        content: `Excellent MOT pick up and drop off service especially during this lockdown period. Would definitely recommend as it saves a lot of hassle having to wait while the MOT gets done. Will 100% use again.`,
        name: 'Naz Rasool',
        stars: 5,
      },
      {
        icon:'mdi-lead-pencil',  
        content: `Thank you for saving my Hyundai Getz from scrapping. Great team resolved my car problem for less than 24 hours. I highly recommend Many Autos.`,
        name: 'Klara Bogdanova',
        stars: 5,
      },
      {
        icon:'mdi-lead-pencil',
        content: `Many Autos have done my MOT 2 years in a row.  They are brilliant value with great customer service including offering a free drop off and pick up service.  I will be using them again next year as well.`,
        name: 'Jessica Woodrow',
        stars: 5,
      },
      {
        icon:'mdi-lead-pencil',  
        content: `Great customer service good prices very pleased`,
        name: 'Asif Rashid',
        stars: 5,
      },
    ],
  })
}
</script>
<style lang="scss" scoped>
.testimonial-sec{
background-position: center center;
background-size: cover;
}
.testimonialsec {
    width: 100%;
    height: 100%;
    background-color: #2b2c2de6;
}
// ::v-deep .v-window__prev.v-btn .v-btn--flat .v-btn--icon .v-btn--round .theme--dark .v-size--default {
// width: 56px;
// height: 56px;
// }
// ::v-deep .v-btn--icon.v-size--default .v-icon, .v-btn--fab.v-size--default .v-icon {
//     height: 24px;
//     font-size: 56px;
//     width: 24px;
// }
.hexagon {
    position: relative;
    width: 116px;
    height: 66.97px;
    background-color: transparent;
    margin: 33.49px 0;
    border-left: solid 2px white;
    border-right: solid 2px white;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
}
.hexagon::before {
    bottom: 25.9878px;
    border-top: solid 2.8284px white;
    border-right: solid 2.8284px white;
}
.hexagon::before {
  content: "";
  position: absolute;
  z-index: 1;
  width: 82.02px;
  height: 82.02px;
  -webkit-transform: scaleY(0.5774) rotate(-45deg);
  -ms-transform: scaleY(0.5774) rotate(-45deg);
  transform: scaleY(0.5774) rotate(-45deg);
  background-color: inherit;
  left: 14.9878px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.hexagon::after {
    bottom: -41.0122px;
    border-bottom: solid 2.8284px white;
    border-left: solid 2.8284px white;
}
.hexagon::after {
  content: "";
  position: absolute;
  z-index: 1;
  width: 82.02px;
  height: 82.02px;
  -webkit-transform: scaleY(0.5774) rotate(-45deg);
  -ms-transform: scaleY(0.5774) rotate(-45deg);
  transform: scaleY(0.5774) rotate(-45deg);
  background-color: inherit;
  left: 14.9878px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

</style>