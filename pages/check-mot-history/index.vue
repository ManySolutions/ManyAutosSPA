<template>
  <div class="home-sec-gaps">
    <div class="first-section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="4" class="mot-section pt-15 mb-12">
            <div class="d-inline-block">
              <h1 class="mb-8 d-block heading-title">
                <strong>Check MOT History</strong>
                <span style="font-weight: 200">&</span>
                <strong>Check MOT Status</strong>
              </h1>
              <p class="text-teal text-18 justify pb-8">
                Curious about your MOT due date? Eager to know the 
                <strong>MOT history</strong>
                or <strong>MOT status</strong>
                of your next purchase? You took the right decision by choosing
                us.
              </p>
              <v-form class="myinput" @submit.prevent="handleSubmit">
                <v-text-field
                  label="Enter your Car reg"
                  outlined
                  v-model="carReg"
                >
                </v-text-field>
                <div class="text-center button">
                  <v-btn
                    class="subscribe-btn text-capitalize"
                    color="secondary"
                    dark
                    x-large
                    block
                    :loading="isLoading"
                    type="submit"
                  >
                    Check Car MOT
                  </v-btn>
                </div>
              </v-form>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="8"
            class="image-section text-center my-auto d-none d-md-block"
          >
            <img
              src="https://static.manyautosltd.com/uploads/Car battery & its working components.png"
              alt="MOT Desktop"
              class="center"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- section 2 -->
    <section
      class="mot-section-three text-white"
    >
      <div class="sectionthree mt-9 mb-10">
        <v-container>
          <v-row class="section-three mt-10">
            <v-col cols="12" md="6">
              <div>
                <h2 class="heading-three text-white pb-5">
                  <span style="font-weight: 200"
                    >Check MOT history and current</span
                  >
                  <strong>MOT status</strong>
                  <span style="font-weight: 200">with ManyAutos.co.uk</span>
                  <strong>free car check</strong>
                </h2>
                <p class="text-teal text-18 justify pb-5">
                  At Manyautos, we share the pride in your ride. You only need
                  to give the registration number and we will provide you with
                  all the relevant information regarding the vehicle you’ve
                  searched for. We can tell what you need to know. Do you want
                  to know the expiry date of your MOT? Want to know why a
                  vehicle failed the MOT? No problem, we will answer all your
                  queries.
                </p>
                <p class="text-teal text-18 justify pb-5">
                  You can even check the date at which the MOT was performed,
                  the mileage that was recorded at the time, and also a list of
                  defects or advisory that was issued.
                </p>
                <p class="text-teal text-18 justify pb-5">
                  It doesn’t matter if you have forgotten when your next MOT is
                  due, or you would like to gather information about a vehicle
                  that you’re planning to buy; we will help you. You can use our
                  handy reminder tool to set a reminder when your MOT is next
                  due.
                </p>
                <p class="text-teal text-18 justify pb-5">
                  The advantage of an <strong>MOT checking service</strong> is
                  that it saves a lot of your money. If you are caught driving
                  without an MOT you could be fined up to £1000. Buying a car
                  without knowing its history could lead to several expensive
                  repairs. You can avoid all this hassle and complications with
                  our <strong>Check MOT online</strong> service.
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="mot-sub-image">
                <img
                  src="https://static.manyautosltd.com/uploads/mechainc-using-tablet-front-van.jpg"
                  alt="MOT Check"
                  class="center"
                />
                <h3 class="sub-heading" style="color: #fff">
                  Revealing hidden vehicle history
                </h3>
              </div>
              <div>
                <p class="text-teal text-18 justify pt-2 pb-5">
                  An MOT check is a great way to check whether the information
                  you’re being told about a vehicle is true or not.
                </p>
                <p class="text-teal text-18 justify pb-5">
                  For instance; according to the industry authorities, 1 in
                  every 20 vehicles that are sold has a mileage discrepancy.
                  There is an odometer reading which does not match with the
                  car’s history. This thing would be impossible to prove without
                  an MOT certificate. So, a free MOT check gives you a chance to
                  have a digital look back at every certificate that was once
                  issued and also check if there have been any errors or
                  adjustments made.
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- last section -->

    <v-container class="home-r-in mb-5">
      <v-row justify="center">
        <v-col cols="12">
          <h1
            class="heading__title heading__title-bar text-center"
            style="font-weight: lighter"
          >
            <span class="font-weight-bold">FAQ</span>
          </h1>
        </v-col>
        <v-col cols="12" class="faq-section">
          <v-expansion-panels popout>
            <v-expansion-panel class="icon">
              <v-expansion-panel-header class="card-header">
                Do you do Class 7 MOTs?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Sorry, we do not do class 7 MOTs at the moment. You can still
                use our reminder service free of charge to be reminded when your
                MOT becomes due.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="card-header">
                Can you collect a vehicle that has an expired MOT?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Yes, our drivers can collect a vehicle that has an expired MOT.
                However, you will need to inform us if the tax has also expired.
                Collection and delivery is always free of charge if the vehicle
                is drivable.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="card-header">
                When does a car need an MOT?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                A vehicle needs an MOT when it reaches 3 years old. Then the MOT
                needs to happen every year.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="card-header">
                Will the police be forgiving if I tell them I just forgot?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Probably not, we do not think it is worth the risk in finding
                out!
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="card-header">
                What happens if I drive with an expired MOT?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                You can be charged up to £1000 fine.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="card-header">
                What if I just don’t drive the car with a failed MOT?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                The law says you cannot even park a vehicle on public roads if
                it does not have a valid MOT. You can face prosecution if you
                get caught.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>

    <!-- last section -->
    <!-- <index-faq></index-faq> -->
  </div>
</template>

<script>
import IndexFaq from "~/pages/__components/index-faq.vue";
export default {
  components: {
    IndexFaq,
  },

  data: () => ({
    carReg: "",
    isLoading: false,
  }),

  methods: {
    handleSubmit() {
      const { carReg } = this;
      this.isLoading = true;

      this.$router.push({
        path: "/check-mot-history/details",
        query: {
          "car-reg": carReg,
        },
      });
    },
  },

  head: {
    title: "Check MOT History | Check MOT Status | ManyAutosLTD",

    meta: [
      {
        hid: 'description', name: 'description',
        content: 'Check your MOT history and status online now for free. Quickly and easily check your MOT expiry and check MOT advisories in one place. '
      },
      {
        name: 'keywords',
        content: 'check mot, check mot history, check car mot, check mot status, check mot online, check mot uk, check mot date, check mot expiry'
      },
      {
        property: "og:title",
        content: "Check MOT History | Check MOT Status | ManyAutosLTD"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:url",
        content: process.env.APP_URL + '/check-mot-history'
      },
      {
        property: "og:image",
        content: "https://static.manyautosltd.com/uploads/car-mot-tes-image.png"
      },
      {
        property: "og:site_name",
        content: "ManyAutos LTD"
      },
      {
        hid: 'og:description',  property: 'og:description',
        content: "Check your MOT history and status online now for free. Quickly and easily check your MOT expiry and check MOT advisories in one place. "
      },
      {
        name: "twitter:card",
        content: "summary"
      },
      {
        name: "twitter:title",
        content: "Check MOT History | Check MOT Status | ManyAutosLTD"
      },
      {
        name: "twitter:description",
        content: "Check your MOT history and status online now for free. Quickly and easily check your MOT expiry and check MOT advisories in one place. "
      },
      {
        name: "twitter:image",
        content: "https://static.manyautosltd.com/uploads/car-mot-tes-image.png"
      },
      {
        itemprop: "image",
        content: "https://static.manyautosltd.com/uploads/car-mot-tes-image.png"
      },
      {
        property: "og:type",
        content: "business.business"
      },
    ]
  },
};
</script>

<style lang="scss" scoped>
.mot-section h1 {
  color: #464646;
}
.section-three h2 {
  color: #464646;
}
@media (min-width: 1220px) {
  .mot-section h1 {
    font-size: 2.15rem;
    line-height: 2.9375rem;
    color: #464646;
  }
}
.section-three h2 {
  font-size: 2.15rem;
  line-height: 2.9375rem;
  color: #464646;
}
.home-sec-gaps p {
  font-size: 17px;
  font-weight: 350;
  line-height: 28px;
}
.section-two .mot-check img {
  width: 50%;
}
@media (min-width: 768px) {
  .section-two .mot-check img {
    width: 20%;
  }
}
@media (min-width: 960px) {
  .home-sec-gaps {
    padding-top: 0px !important;
    padding-bottom: 20px !important;
  }
}
@media (max-width: 960px) {
  .home-sec-gaps .first-section .mot-section {
    max-width: 480px;
    margin: auto;
  }
}
.section-two .mot-check-heading h2 {
  color: #464646;
}
@media (min-width: 992px) {
  .section-two .mot-check-heading h2 {
    font-size: 24px;
  }
}
.section-two span {
  font-weight: 350;
  font-size: 17px;
}

.mot-section-three {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-image: url('https://static.manyautosltd.com/uploads/car-mechanic-wearing-white-uniform-stand-holding-wrench2.jpg');
}
.sectionthree {
  width: 100%;
  height: 100%;
  background-color: #005469e0;
}

.mot-sub-image h3 {
  padding-bottom: 17px;
  padding-top: 8px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #464646;
}
.card-header {
  background-color: #f6f6f6;
  // color: #ffffff;
  padding: 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: normal;
}
.card-header-body {
  // background-color: #f6f6f6;
  padding-top: 16px;
}
.home-r-in .faq-section {
  margin: auto;
}
@media (min-width: 960px) {
  .home-r-in {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }
  .heading__title {
    margin-bottom: 30px;
  }
}
</style>