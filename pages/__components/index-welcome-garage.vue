<template>
    <v-container class="welcome-page">
        <v-row>
                <v-col cols="12" lg="6" class="my-auto">
                  <div class="welcome-img text-center pb-4">
                    <img
                      src="https://static.manyautosltd.com/uploads/car-automobile-repair-service-center-with-soft-focus-light-background_800x533_670x500.jpg"
                      style="border-radius:10px;">
                  </div>
                </v-col>

            <v-col cols="12" lg="6" class="welcome-detail">
                <div class="welcome-heading">
                    <h1>
                        Welcome to <span>ManyAutos</span>
                    </h1>
                </div>
                <div>
                    <p class="pt-5 pb-5">
                        Collaboratively plagiarize extensible e-markets vis-a-vis business outsourcing. Progressively
                        visualize team driven e-commerce before excellent technology. Enthusiastically simplify optimal
                        vortals without open-source web services monotonectally supply efficient.
                    </p>
                </div>
                <div>
                    <ul class="pb-5">
                        <li class="pb-2"><v-icon color="primary" small> mdi-car </v-icon> 24 Month / 24,000km Nationwide Warranty monotone</li>
                        <li class="pb-2"><v-icon color="primary" small> mdi-car </v-icon> Customer Rewards Program and excellent technology</li>
                        <li class="pb-2"><v-icon color="primary" small> mdi-car </v-icon> 24-Hour Roadside Assistance plagiarize extensible</li>
                        <li class="pb-2"><v-icon color="primary" small> mdi-car </v-icon> Courtesy Local Shuttle Service progressively enable</li>
                        <li class="pb-2"><v-icon color="primary" small> mdi-car </v-icon> Courtesy Loaner Vehicle Completely iterate resource</li>
                    </ul>
                </div>
                <div class="info-button mt-5">
                   <v-btn
                   color="primary" 
                   x-large
                   >
                    Get More Info
                   </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss" scoped>
.welcome-img{
    position:relative;
}
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}
.welcome-page {
    padding-top: 150px;
    padding-bottom: 150px;
}
@media (max-width:960px){
    .welcome-page {
    background-color: #eff2f2;
    padding-top: 70px;
    padding-bottom: 70px;
}
.welcome-page p {
    text-align: center;
}
}

.welcome-page p,ul {
    font-size: 16px;
    font-weight: 400;
    color: #777;
    line-height: 28px;
}

.welcome-page .welcome-detail .welcome-heading h1{
    font-size: 40px;
    color: #01133c;
    text-align: left;
}
.welcome-page .welcome-detail .welcome-heading span{
    font-size: 40px;
    color: #ef0f3a;
}
.welcome-page ul {
    list-style-type: none;
}
.welcome-page .welcome-detail .info-button{
    text-align:left;
}
@media (max-width: 1260px){

.welcome-page .welcome-detail .welcome-heading h1{
    text-align: center;
}
.welcome-page .welcome-detail .info-button{
    text-align: center;
}
.welcome-page p {
    text-align: center;
}
}

@media (min-width: 1260px){
.welcome-page .welcome-detail {
        padding-left: 4rem;
}

}
</style>