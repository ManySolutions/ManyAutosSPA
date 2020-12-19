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
          outlined
        ></v-select>
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
        e3: null,
        e4: null,
        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' },
        ],
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
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