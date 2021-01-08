<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="refer-page">
          <h1 class="refer-title">Refer-A-Friend</h1>
          <v-card class="card mx-auto text-center" 
          outlined
          >
            <v-row class="raf-banner">
                <v-col md="4" class="first-logo d-none d-md-block">
                    <img src="~/static/imgs/referral.png" alt="referral" class="center" style="max-width:40%;"  />
                </v-col>
                <v-col md="4">
                    <div class="first-heading">£10 FOR YOU,</div>
                    <div class="second-heading">£10 for your friend</div>
                </v-col>
                <v-col md="4" class="first-logo d-none d-md-block">
                    <img src="~/static/imgs/referral-one.png" alt="referral-one" class="center" style="max-width:40%;"  />
                </v-col>
            </v-row>
            <div class="refer-content text-center" style="background-color: #F2F9FF;">
            <p class="refer-content-text">Earn £10 for every qualified referral to ManyAutos, plus each referral will get a £10 sign-up bonus.</p>
            <v-container class="three-points d-none d-md-block">
                <v-row>
                    <v-col md="4">
                    <v-table>
                        <tbody>
                            <tr>
                                <td style="padding-bottom:18px">
                                <v-icon
                                    left
                                    large
                                    color="primary"
                                >
                                    mdi-numeric-1-circle
                                </v-icon>
                                </td>
                                <td>
                                    <p>Invite friends to <br>join ManyAutos</p>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
                 <v-col md="4">
                    <v-table>
                        <tbody>
                            <tr>
                                <td style="padding-bottom:40px">
                                <v-icon
                                    left
                                    large
                                    color="primary"
                                >
                                    mdi-numeric-2-circle
                                </v-icon>
                                </td>
                                <td>
                                    <p>They get a £10 sign-up bonus once they earn <br> £10 in cash back</p>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
                 <v-col md="4">
                    <v-table>
                        <tbody>
                            <tr>
                                <td style="padding-bottom:18px">
                                <v-icon
                                    left
                                    large
                                    color="primary"
                                >
                                    mdi-numeric-3-circle
                                </v-icon>
                                </td>
                                <td>
                                    <p>You get a £10 referral bonus.Repeat!</p>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
            </v-row>
        </v-container>
            </div>
          </v-card>
          <!-- section 1 -->
          <v-card class="second-card mt-10">
              <h2>Refer-a-Friend and Get £10</h2>
              <hr style="width:100%">
              <div class="sec-1 text-center">
                  <span>Share Your Unique Link
                      <v-icon style="color: #ef7200;">mdi-help-circle-outline</v-icon>
                  </span>           
            <div class="text-field mt-10">
            <v-text-field
                label="manyautosltd.com/rs/GYCKKYC/"
                v-model="text1" ref="textToCopy"
                single-line
                outlined
          ></v-text-field>
            </div>
            <div>
            <v-btn
                text
                color="primary"
                class="py-0 px-0"
                 @click="copyText"
            >
          <span class="text-large">Copy Link</span>
        </v-btn>
            </div>
          </div>
          <!-- section 2 -->
          <div class="sec-2 text-center">
              <span>Share on Social Media
                    <v-icon style="color: #ef7200;">mdi-help-circle-outline</v-icon>
            </span> 

        <div class="all-btn">
        <v-btn
            class="ma-2 mt-7"
            color="purple"
            :href="`https://www.facebook.com/sharer/sharer.php?u=https://www.manyautosltd.com`"
            target="_blank"
            dark
            x-large
            block
        >
        <v-icon
        class="fb-btn mr-2"
            dark
            left
            large
        >
            mdi-facebook
        </v-icon>
            Share on faceBook
      </v-btn>
      <v-btn
            class="ma-2"
            color="primary"
            :href="`https://twitter.com/intent/tweet?url=https://www.manyautosltd.com&text=` "
            target="_blank"
            dark
            x-large
            block
        >
        <v-icon
        class="twitter-btn mr-2"
            dark
            left
            large
        >
            mdi-twitter
        </v-icon>
            Share on Twitter
      </v-btn>
        </div>
          </div>
          <!-- section 3 -->
        <div class="sec-3 text-center">
        <span>Email a Friend
            <v-icon style="color: #ef7200;">mdi-help-circle-outline</v-icon>
        </span> 
        <div class="text-field">
        <v-text-field
            label="Enter your friend's email address"
            single-line
            outlined
        >
        </v-text-field>
        </div>
        <v-btn
            class="ma-2"
            color="secondary"
            dark
            x-large
            block
      >
            Go
      </v-btn>
          </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
 methods: {
        copyText () {
          let textToCopy = this.$refs.textToCopy.$el.querySelector('input')
          textToCopy.select()
          document.execCommand("copy");
        }
      },
}
</script>
<style lang="scss" scoped>
.refer-page .refer-title{
    font-weight: 300;
    font-size: 28px;
    color: #424242;
}
.refer-page .card .raf-banner{

    margin: 10px auto 0 auto;
}
.refer-page .card .raf-banner .first-heading{
    color: #6736A3;
    font-size: 24px;
    line-height: 1.2;
    font-weight: bold;
}
@media (min-width:960px){
    .refer-page .card .raf-banner .first-heading{
    font-size: 34px;
}
}
.refer-page .card .raf-banner .second-heading{
    color: #E8348A;
    font-size: 18px;
    line-height: 1.0;
    font-weight: lighter;
}
@media (min-width:960px){
    .refer-page .card .raf-banner .second-heading{
    font-size: 23px;
}
}
.refer-page .card .refer-content .refer-content-text{
    border-top: 0px;
    margin: 0px;
    padding: 20px 5% 10px 5%;
    width: 100%;
    text-align: center;
    background-color: #F2F9FF;
    font-weight: 500;
    color: #666666;
}
.refer-page .card .refer-content .three-points{

    color: #9e7bda;
    padding-top: 15px;
    max-width: 670px;
    margin: auto;
}
.refer-page .card .refer-content .three-points p{

    font-size: 11pt;
    font-weight: 400;
}
.refer-page .second-card h2{
    margin: 0px;
    padding: 10px 10px 10px 17px;
    font-size: 20px;
    font-weight: 400;
    color: #424242;

}
.refer-page .second-card .sec-1{

    font-size: 18px;
    font-weight: 500;
    margin-bottom: 25px;
    color: #ef7200;
    margin-top: 20px;
    padding: 20px;
}
.refer-page .second-card .sec-1 .text-field{

    margin: auto;
    max-width: 293px;
}
.refer-page .second-card .sec-2{

    font-size: 18px;
    font-weight: 500;
    margin-bottom: 25px;
    color: #ef7200;
    margin-top: 20px;
    padding: 20px;
}
.refer-page .second-card .sec-2 .all-btn{

    max-width:310px ;
    margin:auto;
}
.refer-page .second-card .fb-btn,.twitter-btn,.chat-btn {
    position: absolute;
    top: 0px;
    left: 10px;
}
.refer-page .second-card .sec-3{

    font-size: 18px;
    font-weight: 500;
    margin-bottom: 25px;
    color: #ef7200;
    margin-top: 20px;
    padding: 20px;
    max-width: 340px;
    margin: auto;
}
.refer-page .second-card .sec-3 .text-field{

    margin-left: 9px;
    margin-right: 0px;
    margin-top: 25px;
  
}
                                                  
</style>