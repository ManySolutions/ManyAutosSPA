<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="feedback text-center">
        <v-form class="m-auto" style="max-width:480px;">
          <v-textarea 
          label="Your Feedback"
          outlined
          >
          </v-textarea>
          <v-rating v-model="rating" 
          background-color="orange lighten-3" 
          color="orange"
          hover 
          large
          value="5"
          >
          </v-rating>
          <v-btn 
          color="success" 
          large 
          class="text-center mt-4"
          >
            Submit FeedBack!
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>