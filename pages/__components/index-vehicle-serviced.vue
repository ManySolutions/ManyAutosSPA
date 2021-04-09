<template>
  <div class="vehicle-serviced w-100">
    <v-container fluid style="padding:0px;">
      <v-row>
        <v-col cols="12" md="6" class="vehicle-service-1">
          <img src="https://static.manyautosltd.com/uploads/car-lifting-equipment-garage-being-repair-fix_960x640.jpg"
            alt="">
        </v-col>
        <v-col cols="12" md="6" class="vehicle-service-2 text-center">
          <h1 class="service-heading">
            VEHICLES SERVICED
          </h1>
          <p>
            We provide top notch maintenance service for all types of vehicles.
            We are certified to service and repair the following makes:
          </p>
          <v-row>
            <v-col cols="4" md="4">
              <ul>
                <li>
                  <span>
                    <v-icon color="primary">
                      mdi-check
                    </v-icon>
                  </span>
                  <span>Motors</span>
                </li>
                <li>
                  <span>
                    <v-icon color="primary">
                      mdi-check
                    </v-icon>
                  </span>
                  <span>Kia</span>
                </li>
                <li>
                  <span>
                    <v-icon color="primary">
                      mdi-check
                    </v-icon>
                  </span>
                  <span>Lexus</span>
                </li>
                <li>
                  <span>
                    <v-icon color="primary">
                      mdi-check
                    </v-icon>
                  </span>
                  <span>Lincoln</span>
                </li>
                <li>
                  <span>
                    <v-icon color="primary">
                      mdi-check
                    </v-icon>
                  </span>
                  <span>Mazda</span>
                </li>
              </ul>
            </v-col>
            
            <v-col cols="4" md="4">
              <ul>
                <li>
                  <span>
                    <v-icon color="primary">
                      mdi-check
                    </v-icon>
                  </span>
                  <span>Motors</span>
                </li>
                <li>
                  <span>
                    <v-icon color="primary">
                      mdi-check
                    </v-icon>
                  </span>
                  <span>Kia</span>
                </li>
                <li>
                  <span>
                    <v-icon color="primary">
                      mdi-check
                    </v-icon>
                  </span>
                  <span>Lexus</span>
                </li>
                <li>
                  <span>
                    <v-icon color="primary">
                      mdi-check
                    </v-icon>
                  </span>
                  <span>Lincoln</span>
                </li>
                <li>
                  <span>
                    <v-icon color="primary">
                      mdi-check
                    </v-icon>
                  </span>
                  <span>Mazda</span>
                </li>
              </ul>
            </v-col>

            <v-col cols="4" md="4">
              <ul>
                <li>
                  <span>
                    <v-icon color="primary">
                      mdi-check
                    </v-icon>
                  </span>
                  <span>Motors</span>
                </li>
                <li>
                  <span>
                    <v-icon color="primary">
                      mdi-check
                    </v-icon>
                  </span>
                  <span>Kia</span>
                </li>
                <li>
                  <span>
                    <v-icon color="primary">
                      mdi-check
                    </v-icon>
                  </span>
                  <span>Lexus</span>
                </li>
                <li>
                  <span>
                    <v-icon color="primary">
                      mdi-check
                    </v-icon>
                  </span>
                  <span>Lincoln</span>
                </li>
                <li>
                  <span>
                    <v-icon color="primary">
                      mdi-check
                    </v-icon>
                  </span>
                  <span>Mazda</span>
                </li>
              </ul>
            </v-col>
            <v-col cols="12" class="text-center">
                <v-btn
                color="primary"
                large
                class="mt-10 mb-10"
                outlined
                >
                View Full List
                <v-icon
                color="primary"
                >
                mdi-chevron-right
                </v-icon>
                </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
  .vehicle-serviced {
    background-color: #E5E5E5;
  }
  .row [class*=col-] {
    padding: 0;
  }
.vehicle-serviced .vehicle-service-1 img{
    vertical-align: bottom;
    height:100%;
}
@media (max-width:960px){
    .vehicle-serviced .vehicle-service-1 img{
    vertical-align: bottom;
    height:auto;
  }
}
  .vehicle-serviced .vehicle-service-2 {
    padding: 0 100px;
    margin-top: 100px;
  }
@media (max-width:568px){
    .vehicle-serviced .vehicle-service-2 {
    padding: 70px 24px;
    margin-top: 26px;
  }
}
@media (min-width:568px) and (max-width:960px){
    .vehicle-serviced .vehicle-service-2 {
    padding-bottom: 50px;
  }
}
@media (min-width:960px) and (max-width:1010px){
    .vehicle-serviced .vehicle-service-2 {
    margin-top: 70px;
  }
}
@media (min-width:1060px) and (max-width:1440px){
    .vehicle-serviced .vehicle-service-2 {
    padding: 0 100px;
    margin-top: 110px;
  }
}
@media (min-width:1440px){
    .vehicle-serviced .vehicle-service-2 {
    padding: 0 100px;
    margin-top: 130px;
  }
}
  .vehicle-serviced .vehicle-service-2 .service-heading {
    text-transform: capitalize;
    font-size: 33px;
    line-height: 44px;
    font-weight: 300;
    color: #333;
  }

  .vehicle-serviced .vehicle-service-2 .service-heading::after {
    display: block;
    content: "";
    background: #1E69B8;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    height: 2px;
  }

  .vehicle-serviced .vehicle-service-2 p {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0px;
    line-height: 32px;
    margin-top: 34px;
    color: #777;
  }

    .vehicle-serviced .vehicle-service-2 ul{
    list-style-type: none;
    text-align: left;
  }
</style>