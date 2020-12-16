<template>
  <div class="review">
    <div class='container'>
      <div class="row">
        <div class="col-12 mb-55 pb-lg-5">
          <h1 class='heading__title heading__title--bar text-white text-center' style="font-weight:lighter;">
            Our <span class='font-weight-bold'>Happy Customers</span>
          </h1>
        </div>
        <div class="col-12">
          <div class="owl-carousel owl-theme owl-loaded owl-drag">
            <div class="owl-stage-outer">
              <div class="owl-stage">
                <div class="owl-item cloned" style="width: 290px; margin-right: 10px;">
                  <div class="item">
                    <div class="card m-auto">
                      <div class="card-body">
                        <p class="card-text">
                          "Really happy with the service. Very professional and friendly team.
                          I originally took my car to another mechanic who didn’t do a good job
                          so I brought it to these guys. I find them very honest."
                        </p>
                        <h5 class="card-title">
                          Mrs Maria
                          <small>Nov 13 2019</small>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-item cloned" style="width: 290px; margin-right: 10px;">
                  <div class="item">
                    <div class="card m-auto">
                      <div class="card-body">
                        <p class="card-text">
                          "Called as drivers window wouldn’t go up. Said to come right away
                          fixed within an hour. Excellent service and company!!
                          Really recommend!!"
                        </p>
                        <h5 class="card-title">
                          Gollette Gardner
                          <small>Mar 10 2020</small>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!-- <carousel :autoplay="true" :nav="false">

    <template slot="prev"><span class="prev">prev</span></template>

</carousel> -->
  </div>

</template>
 <!-- <script> 
 import carousel from 'vue-owl-carousel2'

 export default {
     components: { 
         carousel
          },

  mounted() {
   }
 }

 </script>-->
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
    padding-top: 60px;
    padding-bottom: 60px;
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

