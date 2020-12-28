<template>
  <v-container
    class='home-sec-gaps home-r-in'
  >
    <v-row justify="center">
      <v-col cols=12 class="">
        <h1 class="heading__title heading__title-bar text-center">
          <span class="font-weight-bold">FAQ</span>
        </h1>
      </v-col>
      <v-col cols=12>
        <v-expansion-panels popout>
          <v-expansion-panel  class="icon">
            <v-expansion-panel-header class="card-header">
              How Does Many Autos LTD work?
            </v-expansion-panel-header>
            <v-expansion-panel-content eager class="card-header-body">
              <ul class="list">
                <p>There are three simple steps.</p>
                <li>Enter your reg number. </li>
                <li>Select from the available services with instant, upfront prices. </li>
                <li>Complete the booking and have your car collected from a location of convenience. </li>
                <li>As simple and as easy as it should be. </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel >
            <v-expansion-panel-header class="card-header">
              Will it effect my manufacturer warranty?
            </v-expansion-panel-header>
            <v-expansion-panel-content eager class="card-header-body">
              Absolutely not. You can have anything done with us and it will not effect your warranty at all.
              All of the parts we use are approved and do not effect any previous warranty on your vehicle.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel >
            <v-expansion-panel-header class="card-header">
              Do you offer any warranty?
            </v-expansion-panel-header>
            <v-expansion-panel-content eager class="card-header-body">
              Absolutely. We have full confidence in all of the mechanics and garages that work with us that we offer
              a full 12 months warranty on parts and labour.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel >
            <v-expansion-panel-header class="card-header">
              Is collection and delivery free?
            </v-expansion-panel-header>
            <v-expansion-panel-content eager class="card-header-body">
              Yes! collection and delivery is a free service we offer to all of our customers.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel >
            <v-expansion-panel-header class="card-header">
              Is there a cancellation fee?
            </v-expansion-panel-header>
            <v-expansion-panel-content eager class="card-header-body">
              We understand there are many things outside of our control and as such there is no fee or fine for
              cancellation.
              We only ask that you give us a minimum of 24 hours notice were possible.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-btn
            color='primary'
            text
            class='text-capitalize mt-3'
            to='/faq'
          >
            More frequently asked questions
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.card-header{
    background-color:#2d97ad;
    color: #ffffff;
    padding: 18px;
    font-weight: 400;
    font-size: 16px;
    line-height: normal;
}
.card-header-body{
    background-color: #f6f6f6;
    padding-top: 16px;
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
</style>