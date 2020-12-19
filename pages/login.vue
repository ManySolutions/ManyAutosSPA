<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto mt-5" max-width="344">
          <v-card-text>
            <h2 class="register-title text-center pt-5 mb-10">Login</h2>
            <v-text-field label="E-Mail Address" placeholder="youremail@gmail.com" outlined>
            </v-text-field>
            <v-text-field label="Password" placeholder="*****" outlined hide-details>
            </v-text-field>

            <!-- <v-btn text color='primary' class='py-0 px-0' style='height: auto'>
              <span class="text-large" >
                Forgot Your Password?
              </span>
            </v-btn> -->
            <div class="login text-center mt-5">
              <v-btn color="primary" large block>
                Login
              </v-btn>
            </div>
            <hr style="margin-top:25px;">
            <p class="text text-center mt-5" style="color:#212529;">Need to create an account?</p>
            <div class="signup text-center">
              <v-btn color="error" large block>
                Signup Here
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.register-title{

    font-size: 27px;
    border: none;
    padding-top: 0px;
    padding-bottom: 10px;
    font-size: 27px;
    font-weight: 600;
    color: black;
}
</style>

