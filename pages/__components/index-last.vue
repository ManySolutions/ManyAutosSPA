<template>
  <div class="our-mission-sec w-100 pt-16 pb-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6" class="">
          <div class="text-left mb-10">
            <h2 class="mission-heading">OUR MISSION</h2>
          </div>
          <div class="para-two mb-10">
            <p>
              We are a one-stop shopping for all your automotive needs. We provide a huge range of car services and
              repairs. All the services are carried out by highly trained mechanics. We can handle any automotive
              problem.
            </p>
            <p>
              We have always considered customers our highest priority and we want to provide them with the best
              services. It doesn’t matter what type of car do you own, whether it’s a SUV, a passenger’s car or a truck.
              Our professionals will make sure that your car is in a top-notch condition before you leave our garage.
            </p>
          </div>
          <div class="text-left mb-12 mb-md-0">
            <v-btn 
              color="primary" 
              x-large
              to="contact"
            >
              Contact Us 
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="text-left mb-10 mt-3">
            <h2 class="popular-heading">POPULAR QUESTIONS</h2>
          </div>
          <v-expansion-panels class="text-left">
            <v-expansion-panel class="icon">
              <v-expansion-panel-header class="card-header">
                How Does Many Autos LTD work?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                <ul class="list">
                  <p>There are three simple steps.</p>
                  <li>Enter your reg number.</li>
                  <li>
                    Select from the available services with instant, upfront
                    prices.
                  </li>
                  <li>
                    Complete the booking and have your car collected from a
                    location of convenience.
                  </li>
                  <li>As simple and as easy as it should be.</li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="card-header">
                Will it effect my manufacturer warranty?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Absolutely not. You can have anything done with us and it will
                not effect your warranty at all. All of the parts we use are
                approved and do not effect any previous warranty on your
                vehicle.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="card-header">
                Do you offer any warranty?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Absolutely. We have full confidence in all of the mechanics and
                garages that work with us that we offer a full 12 months
                warranty on parts and labour.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="card-header">
                Is collection and delivery free?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Yes! collection and delivery is a free service we offer to all
                of our customers.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="card-header">
                Is there a cancellation fee?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                We understand there are many things outside of our control and
                as such there is no fee or fine for cancellation. We only ask
                that you give us a minimum of 24 hours notice were possible.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-btn color="primary" text class="text-capitalize mt-3" to="/faq">
              More frequently asked questions
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
.our-mission-sec {
  background-color: #f4f4f4;
}
.our-mission-sec .mission-heading {
  font-size: 22px;
  line-height: 34px;
  font-weight: 400;
  color: #333;
  margin-bottom: 13px;
}
.our-mission-sec .mission-heading::after {
  display: block;
  content: "";
  background: #00b4d8;
  width: 40px;
  height: 2px;
  margin-top: 13px;
}
.our-mission-sec .para-one p {
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 32px;
  margin-top: 34px;
  color: #777;
}
.our-mission-sec .para-two p {
    font-size: 1rem;
    line-height: 32px;
    margin-top: 34px;
    color: #777;
}
.our-mission-sec .popular-heading {
  font-size: 22px;
  line-height: 34px;
  font-weight: 400;
  color: #333;
  margin-bottom: 13px;
}
.our-mission-sec .popular-heading::after {
  display: block;
  content: "";
  background: #00b4d8;
  width: 40px;
  height: 2px;
  margin-top: 13px;
}
.card-header {
  background-color: #ffffff;
  color: #777;
  padding: 18px;
  font-weight: 300;
  font-size: 18px;
  line-height: normal;
}
.card-header-body {
  background-color: #ffffff;
  padding-top: 16px;
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