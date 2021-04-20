<template>
    <div class="why-choose-us w-100 pt-16 pb-16">
        <v-container>
            <v-row>
                <v-col cols="12" class="heading-sec text-center">
                    <h1 class="choose-heading">
                        why choose us
                    </h1>
                    <p>
                        We are one of the leading auto repair shops serving customers in Tucson. <br>
                        All mechanic services are performed by highly qualified mechanics.
                    </p>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="4">
                    <div class="hexagon">
                      <div class="sl-small-user-chat text-center">
                          <v-icon
                          color="primary"
                          class="choose-icon pt-2"
                          >
                              mdi-account-supervisor-outline
                          </v-icon>
                      </div>
                    </div>
                    <div class="detail-sec text-center">
                          <h4 class="detail-sec-heading pt-6">
                              EVERY JOB IS PERSONAL
                          </h4>
                          <p>
                              If you want the quality you would expect from the dealership, but with a more personal and
                              friendly atmosphere, you have found it.
                          </p>
                      </div>
                </v-col>
                <v-col cols="12" sm="4">
                    <div class="hexagon">
                      <div class="sl-small-user-chat text-center">
                          <v-icon
                          color="primary"
                          class="choose-icon pt-2"
                          >
                              mdi-wrench-outline
                          </v-icon>
                      </div>
                    </div>
                    <div class="detail-sec text-center">
                          <h4 class="detail-sec-heading pt-6">
                              BEST MATERIALS
                          </h4>
                          <p>
                              We have invested in all the latest specialist tools and diagnostic software that is
                              specifically tailored for the software in your vehicle.
                          </p>
                      </div>
                </v-col>

                <v-col cols="12" sm="4">
                    <div class="hexagon">
                      <div class="sl-small-user-chat text-center">
                          <v-icon
                          color="primary"
                          class="choose-icon pt-2"
                          >
                              mdi-truck-outline
                          </v-icon>
                      </div>
                    </div>
                    <div class="detail-sec text-center">
                          <h4 class="detail-sec-heading pt-6">
                              PROFESSIONAL STANDARDS
                          </h4>
                          <p>
                              Our auto repair shop is capable of servicing a variety of models. We only do the work that
                              is needed to fix your problem.
                          </p>
                      </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style lang="scss" scoped>
.why-choose-us .heading-sec .choose-heading {
    text-transform: capitalize;
    font-size: 33px;
    line-height: 44px;
    font-weight: 300;
    color: #333;
}
.why-choose-us .heading-sec .choose-heading::after {
    display: block;
    content: "";
    background: #00b4d8;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    height: 2px;
}

.why-choose-us .heading-sec p {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0px;
    line-height: 32px;
    margin-top: 34px;
    color: #777;
}
.why-choose-us .hexagon .choose-icon{
    font-size: 54px;
}
.hexagon {
    position: relative;
    width: 116px;
    height: 66.97px;
    background-color: transparent;
    margin: 33.49px 0;
    border-left: solid 2px #00b4d8;
    border-right: solid 2px #00b4d8;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
}
.hexagon::before {
    bottom: 25.9878px;
    border-top: solid 2.8284px #00b4d8;
    border-right: solid 2.8284px #00b4d8;
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
    border-bottom: solid 2.8284px #00b4d8;
    border-left: solid 2.8284px #00b4d8;
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
.why-choose-us .detail-sec .detail-sec-heading {
    text-transform: capitalize;
    font-size: 18px;
    line-height: 44px;
    font-weight: 500;
    color: #333;
}
.why-choose-us .detail-sec .detail-sec-heading::after {
    display: block;
    content: "";
    background: #00b4d8;
    width: 40px;
    height: 2px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
}
.why-choose-us .detail-sec p {
    font-size: 15px;
    margin-top: 20px;
    color: #777;
}
</style>