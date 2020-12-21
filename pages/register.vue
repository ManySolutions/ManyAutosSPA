<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto mt-5" max-width="344">
          <v-card-text>
            <h2 class="register-title text-center pt-5 mb-10">Create Account</h2>
            <v-text-field label="Name" placeholder="Your Name" outlined>
              </v-text-field>
              <v-text-field label="E-Mail Address" placeholder="youremail@gmail.com" outlined>
              </v-text-field>
              <v-text-field label="Password" placeholder="*****" outlined>
              </v-text-field>    
              <v-text-field label="Confirm Password" placeholder="*****" outlined hide-details="">
              </v-text-field>
              <v-select
              class="select mt-8 mb-8"
              v-model="e1"
              :items="states"
              menu-props="auto"
              label="Select"
              hide-details
              prepend-icon="mdi-map"
              single-line
              outlined>
            </v-select>
              <v-text-field label="Mobile No." placeholder="+44 7700 ***796" outlined hide-details="">
              </v-text-field>    
              <v-checkbox v-model="ex4" label="Notifictaion Via SMS" color="primary" value="primary" hide-details></v-checkbox>
            <div class="login text-center mt-10">
              <v-btn color="primary" large block>
                Register
              </v-btn>
            </div>
            <hr style="margin-top:25px;">
            <p class="text text-center mt-5" style="color:#212529;">Already have an account?</p>
            <div class="signup text-center">
              <v-btn color="error" large block>
                Login
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        e1: 'United Kingdom (+44)',

        states: [
          'Austria (+43)', 'Belgium (+32)', 'Bulgaria (+359)', 'Croatia (+385)',
          'Cyprus (+357)', 'Czech Republic (+420)', 'Denmark (+45)', 'Estonia (+372)',
          'Finland (+358)', 'France (+33)', 'Germany (+49)',
          'Greece (+30)', 'Hungary (+36)', 'Ireland (+353)', 'Italy (+39)', 'Latvia (+371)',
          'Lithuania (+370)', 'Luxembourg (+352)', 'Malta (+356)', 'Netherlands (+31)', 'Poland (+48)',
          'Portugal (+351)', 'Romania (+40)', 'Slovakia (+421)', 'Slovenia (+386)',
          'Spain (+34)', 'Sweden (+46)', 'Albania (+355)', 'Andorra (+376)',
          'Armenia (+374)', 'Belarus (+375)', 'Bosnia and Herzegovina (+387)', 'Faroe Islands (+298)',
          'Georgia (+995)', 'Gibraltar (+350)', 'Iceland (+354)', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming','United Kingdom (+44)',
        ],
      }
    },
  }
</script>
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
