<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text class='text-center'>
            <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
              <i class="checkmark secondary--text">✓</i>
            </div>
            <h1 class='mt-10 secondary--text'>Success!</h1> 
            <p class='my-7'>We received your car repair booking request;<br/><br /> we'll be in touch shortly!</p>
            <v-btn
              color='primary'
              text
              outlined
              :to='{name: "booking-my-all"}'
            >
              <strong>
                See all bookings
              </strong>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

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