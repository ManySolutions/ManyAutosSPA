<template>
  <span>
    <v-btn v-if="isSubscribed" color="white" dark text small>
      <v-icon class="mr-2">mdi-check-circle-outline</v-icon>
      {{
        isCurrentSubscribed ? "Successfully Subscribed" : "Already Subscribed For Alerts"
      }}
    </v-btn>

    <v-btn
      v-else-if="isAuth"
      color="secondary"
      dark
      x-large
      @click="handleSubscribe"
      :loading="isLoading"
    >
      <strong class="text-capitalize"> Subscribe MOT Alert </strong>
    </v-btn>

    <v-dialog
      v-else
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-top-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="secondary" dark x-large v-bind="attrs" v-on="on">
          <strong class="text-capitalize"> Subscribe MOT Alert! </strong>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar light color="light" class="elevation-0">
          <v-spacer></v-spacer>
          <v-btn
            icon
            light
            @click="dialog = false"
            large
            class="close-btn mr-3"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="text-center letter-image">
              <div class="for-desktop active d-none d-md-block">
                <img
                  src="https://static.manyautosltd.com/uploads/mot-desktop.png"
                  alt="MOT Desktop"
                  class="center desktop"
                />
              </div>
              <div class="for-mobile active d-flex d-md-none">
                <img
                  src="https://static.manyautosltd.com/uploads/mot-mobile2.png"
                  alt="MOT Mobile"
                  class="center mobile"
                />
              </div>
            </v-col>

            <v-col
              cols="12"
              md="6"
              class="subscribe-section text-center pt-5 mb-12"
            >
              <div class="text-center d-inline-block">
                <h1
                  class="mb-12 d-block font-weight-bold heading-title text-center"
                >
                  Subscribe For
                  <span class="text-primary">MOT </span>
                  <br />
                  Expiry Alerts & Updates
                </h1>
                <v-form class="myinput">
                  <v-text-field label="Full Name" outlined></v-text-field>
                  <v-text-field label="Email" outlined></v-text-field>
                  <div class="text-center button">
                    <v-btn
                      class="subscribe-btn"
                      color="primary"
                      dark
                      x-large
                      block
                    >
                      Subscribe Now!
                    </v-btn>
                  </div>
                </v-form>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </span>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import { subscribeMOTAlerts } from "~/api/user";
import toastr from "~/node_modules/toastr/toastr";
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      isLoading: false,
      isCurrentSubscribed: false,
    };
  },
  computed: {
    ...mapGetters("user", ["isAuth"]),
    ...mapState("user", ["info"]),
    ...mapState("booking", ["modelId"]),

    isSubscribed() {
      const {isCurrentSubscribed, info, modelId} = this;

      try {
        return (
          isCurrentSubscribed 
          || (
            info 
            && info.is_mot_subscribed
            && info.car_model_ids.includes(modelId) 
          )
        );
      } catch (error) {
        return false;
      }
    },
  },
  methods: {
    handleSubscribe() {
      this.isLoading = true;

      subscribeMOTAlerts(this.http, {
        model_id: this.modelId,
      })
        .then((res) => {
          if (res.status) {
            toastr.success(res.message);
            this.$store.commit("user/TOGGLE_SUBSCRIBE", true);
            this.isCurrentSubscribed = true;
          } else {
            toastr.error(res.message);
          }
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
<style lang="scss" scoped>
@media (min-width: 992px) {
  .letter-image {
    margin-top: 120px;
  }
}
@media (min-width: 992px) {
  .subscribe-section {
    margin-top: 120px;
  }
}
.for-mobile .mobile {
  width: 45%;
  margin: auto;
}
</style>