<template>
  <v-container>
    <v-row justify="center">
      <v-col cols=12 md=8 lg=6 xl=5>
        <v-card>
          <v-card-text class='text-center'>
            <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
              <i class="checkmark secondary--text">✓</i>
            </div>
            <h1 class='mt-10 secondary--text'>Success!</h1> 
            <p class='my-7'>We have received your booking request.<br/><br /> we'll be in touch shortly!</p>
            <v-btn
              color='primary'
              text
              outlined
              :to='{name: "my-booking"}'
            >
              <strong>
                See Your Bookings
              </strong>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import http from '~/utils/http';

export default {
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
body {
  text-align: center;
  padding: 40px 0;
  background: #EBF0F5;
}
h1 {
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 10px;
}
p {
  color: #404F5E;
  font-size:20px;
  margin: 0;
}
i {
  font-size: 100px;
  line-height: 200px;
  margin-left:-15px;
}
</style>