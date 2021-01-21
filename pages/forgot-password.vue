<template>
  <v-container class='home-sec-gaps'>
    <v-row>
      <v-col cols="12">
        <v-form>
          <v-card class="mx-auto mt-5" max-width="344">
            <v-card-text>
              <h2 class="forgot-pass text-center pt-5 mb-10">
                Forgot Your Password?
              </h2>
               <v-text-field
                label="Your Email"
                placeholder="youremail@gmail.com"
                type="email"
                outlined
              >
              </v-text-field>         
              <div class="update text-center">
                <v-btn 
                  color="secondary" 
                  large 
                  block
                > 
                Reset my Password
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>