<template>
  <div class="refer-page">
    <h1 class="refer-title">Refer-A-Friend</h1>
    <v-card class="card mx-auto text-center" outlined>
      <v-row class="raf-banner">
        <v-col md="4" class="first-logo d-none d-md-block">
          <img
            src="~/static/imgs/referral.png"
            alt="referral"
            class="center"
            style="max-width: 40%"
          />
        </v-col>
        <v-col md="4">
          <div class="first-heading">Earn {{referralAmount}} by Referring Your Friend</div>
        </v-col>
        <v-col md="4" class="first-logo d-none d-md-block">
          <img
            src="~/static/imgs/referral-one.png"
            alt="referral-one"
            class="center"
            style="max-width: 40%"
          />
        </v-col>
      </v-row>
      <div class="refer-content text-center" style="background-color: #f2f9ff">
        <p class="refer-content-text">
          Earn {{referralAmount}} for every qualified referral to ManyAutos.
        </p>
        <v-container class="three-points d-none d-md-block">
          <v-row>
            <v-col md="4">
              <table>
                <tbody>
                  <tr>
                    <td style="padding-bottom: 18px">
                      <v-icon left large color="primary">
                        mdi-numeric-1-circle
                      </v-icon>
                    </td>
                    <td>
                      <p><strong>Share your referral link</strong> with your friends</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </v-col>
            <v-col md="4">
              <table>
                <tbody>
                  <tr>
                    <td style="padding-bottom: 40px">
                      <v-icon left large color="primary">
                        mdi-numeric-2-circle
                      </v-icon>
                    </td>
                    <td>
                      <p>
                        They come and <strong>book their vehicle</strong> with
												ManyAutos
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </v-col>
            <v-col md="4">
              <table>
                <tbody>
                  <tr>
                    <td style="padding-bottom: 18px">
                      <v-icon left large color="primary">
                        mdi-numeric-3-circle
                      </v-icon>
                    </td>
                    <td>
                      <p>You get a <strong>{{referralAmount}} referral bonus</strong>. <br> Repeat!</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-card>
    <!-- section 1 -->
    <v-card class="second-card mt-10">
      <v-card-title>
				Refer a Friend and Get &nbsp;<strong>{{referralAmount}}</strong>
			</v-card-title>
			<v-divider></v-divider>
      <v-card-text>
				<div class="sec-1 text-center">
					<span
						>Share Your Unique Link
						<v-icon style="color: #ef7200">mdi-help-circle-outline</v-icon>
					</span>
					<div class="text-field mt-10">
						<v-text-field
							:label="referralLink"
							ref="textToCopy"
							single-line
							outlined
							solo
							readonly
							:value='referralLink'
						></v-text-field>
					</div>
					<div>
						<v-btn text color="primary" class="py-0 px-0" @click="copyText">
							<span class="text-large">Copy Link</span>
						</v-btn>
					</div>
				</div>
				<!-- section 2 -->
				<div class="sec-2 text-center">
					<span
						>Share on Social Media
						<v-icon style="color: #ef7200">mdi-help-circle-outline</v-icon>
					</span>

					<div class="all-btn">
						<v-btn
							class="ma-2 mt-7"
							color="purple"
							target="_blank"
							@click="openWin()"
							dark
							x-large
							block
						>
							<v-icon class="fb-btn mr-2" dark left large> mdi-facebook </v-icon>
							Share on faceBook
						</v-btn>
						<v-btn
							class="ma-2"
							color="primary"
							target="_blank"
							@click="openWinTwo()"
							dark
							x-large
							block
						>
							<v-icon class="twitter-btn mr-2" dark left large>
								mdi-twitter
							</v-icon>
							Share on Twitter
						</v-btn>
					</div>
				</div>
				<!-- section 3 -->
				<form @submit.prevent="handleSendEmail" class="sec-3 text-center">
					<span
						>Email a Friend
						<v-icon style="color: #ef7200">mdi-help-circle-outline</v-icon>
					</span>
					<div class="text-field">
						<v-text-field
							label="Enter your friend's email address"
							single-line
							outlined
							v-model='email'
						>
						</v-text-field>
					</div>
					<v-btn 
						class="ma-2" color="secondary" dark x-large block
						type='submit'
						:loading='sendLoading'
					> 
						Go 
					</v-btn>
				</form>
			</v-card-text>
    </v-card>
  </div>
</template>
<script>
import toastr from 'toastr';
import { getRefferalLink, sendReferralEmail } from '~/api/user';
export default {
  data: () => ({
		referralLink: '',
		amount: 0,
		email: '',
		sendLoading: false,
	}),
	computed: {
		referralAmount() {
			return process.env.CURRENCY_SYMBOL + this.amount;
		}
	},
	asyncData(context) {
		// console.log(context.store.state);
	},
  methods: {
		async getLink() {
			const {link, amount} = (await getRefferalLink(this.http));
			this.referralLink = `${process.env.APP_URL}/rf/${link}`;
			this.amount = amount;
		},
    copyText() {
      let textToCopy = this.$refs.textToCopy.$el.querySelector("input");
      textToCopy.select();
			document.execCommand("copy");
			toastr.success('Link Copied!');
    },
    openWin() {
      window.open(
        "https://www.facebook.com/sharer/sharer.php?u="+this.referralLink,
        "myWindow",
        "width=400,height=100"
      );
    },
    openWinTwo() {
      window.open(
        "https://twitter.com/intent/tweet?text=Share+And+Earn+With+ManyAutos&url="+this.referralLink,
        "myWindow",
        "width=400,height=200"
      );
		},
		handleSendEmail() {
			const {email} = this;
			this.sendLoading = true;

			sendReferralEmail(this.http, {email})
				.then(({status, message}) => {
					if (status) {
						toastr.success(message)
						this.email = '';
					} else {
						toastr.error(message)
					}
				}).finally(() => this.sendLoading = false)
		}
  },
};
</script>
<style lang="scss" scoped>
.refer-page .refer-title {
  font-weight: 300;
  font-size: 28px;
  color: #424242;
}
.refer-page .card .raf-banner {
  margin: 10px auto 0 auto;
}
.refer-page .card .raf-banner .first-heading {
  color: #6736a3;
  font-size: 24px;
  line-height: 1.2;
  font-weight: bold;
}
@media (min-width: 960px) {
  .refer-page .card .raf-banner .first-heading {
    font-size: 34px;
  }
}
.refer-page .card .raf-banner .second-heading {
  color: #e8348a;
  font-size: 18px;
  line-height: 1;
  font-weight: lighter;
}
@media (min-width: 960px) {
  .refer-page .card .raf-banner .second-heading {
    font-size: 23px;
  }
}
.refer-page .card .refer-content .refer-content-text {
  border-top: 0px;
  margin: 0px;
  padding: 20px 5% 10px 5%;
  width: 100%;
  text-align: center;
  background-color: #f2f9ff;
  font-weight: 500;
  color: #666666;
}
.refer-page .card .refer-content .three-points {
  color: #9e7bda;
  padding-top: 15px;
  max-width: 670px;
  margin: auto;
}
.refer-page .card .refer-content .three-points p {
  font-size: 11pt;
  font-weight: 400;
}
.refer-page .second-card h2 {
  margin: 0px;
  padding: 10px 10px 10px 17px;
  font-size: 20px;
  font-weight: 400;
  color: #424242;
}
.refer-page .second-card .sec-1 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 25px;
  color: #ef7200;
  margin-top: 20px;
  padding: 20px;
}
.refer-page .second-card .sec-1 .text-field {
  margin: auto;
  max-width: 293px;
}
.refer-page .second-card .sec-2 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 25px;
  color: #ef7200;
  margin-top: 20px;
  padding: 20px;
}
.refer-page .second-card .sec-2 .all-btn {
  max-width: 310px;
  margin: auto;
}
.refer-page .second-card .fb-btn,
.twitter-btn,
.chat-btn {
  position: absolute;
  top: 0px;
  left: 10px;
}
.refer-page .second-card .sec-3 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 25px;
  color: #ef7200;
  margin-top: 20px;
  padding: 20px;
  max-width: 356px;
  margin: auto;
}
.refer-page .second-card .sec-3 .text-field {
  margin-left: 9px;
  margin-right: 0px;
  margin-top: 25px;
}
</style>