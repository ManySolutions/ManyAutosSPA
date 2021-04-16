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
                        Many Autos prides itself on providing great customer service, fair and competitive pricing along
                        with great quality work that leaves you happy with the entire process. We regularly check our
                        rates against the market to make sure we are providing our customers with some of the best
                        labour and repair prices in the local area.
                    </p>
                </div>
                <div>
                    <ul class="pb-5">
                        <li class="pb-2"><v-icon color="primary" small> mdi-car </v-icon> 12 Months warranty on all parts and labour.</li>
                        <li class="pb-2"><v-icon color="primary" small> mdi-car </v-icon> Recovery can be arranged with external companies if needed.</li>
                        <li class="pb-2"><v-icon color="primary" small> mdi-car </v-icon> Free collection and delivery – as long as the vehicle is drivable.</li>
                        <li class="pb-2"><v-icon color="primary" small> mdi-car </v-icon> Available via email, phone and web chat for your convenience.</li>
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