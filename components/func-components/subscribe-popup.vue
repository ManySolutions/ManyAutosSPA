<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-top-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          MOT Alerts
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          light
          color="light"
          class="elevation-0"
        >   
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
                     <v-col md="6" class='text-right d-none d-md-block letter-image'>
                    <img :src="assets('/frontend/letter.png')" alt="" class="center">
                    </v-col>
                  <v-col md="6"> 
                    <div class="text-center d-inline-block subscribe-section">
                      <h1 class='mb-12 d-block font-weight-bold heading-title text-center'>
                        Subscribe For
                        <span class='text-primary'>MOT </span>
                        <br>
                        Expiry Alerts & Updates
                      </h1>
                      <v-form class="myinput">
                         <v-text-field
                            label="Full Name"
                            outlined
                        ></v-text-field>
                        <v-text-field
                            label="Email"
                            outlined
                        ></v-text-field>
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
  </v-row>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
  }
</script>
<style lang="scss" scoped>
.letter-image{

    margin-top: 120px;
}
.subscribe-section{

    margin-top: 120px;
}
</style>