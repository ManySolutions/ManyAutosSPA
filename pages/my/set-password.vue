<template>
  <v-container class='home-sec-gaps'>
    <v-row>
      <v-col cols="12">
        <v-form>
          <v-card class="mx-auto mt-5" max-width="344">
            <v-card-text>
              <h2 class="set-pass text-center pt-5 mb-10">
                Set Your Password
              </h2>
               <v-text-field
                label="Password"
                placeholder="*****"
                type="password"
                outlined
              >
              </v-text-field>
              <v-text-field
                label="Confirm Password"
                placeholder="*****"
                type="password"
                outlined
              >
              </v-text-field>          
              <div class="update text-center">
                <v-btn 
                  color="primary" 
                  large 
                  block
                > 
                Update Password
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