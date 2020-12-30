<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-top-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary"
           dark
           v-bind="attrs"
           v-on="on"
        >
           Request
        </v-btn>
      </template>
      <v-card>
        <v-toolbar light
            color="light"
            elevation="0"
        >
        <v-spacer></v-spacer>
        <v-btn
            icon
            light
            @click="dialog = false" large
            class="close-btn mr-3">
        <v-icon>mdi-close</v-icon>
        </v-btn>
        </v-toolbar>
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="6">
              <div class="text-center subscribe-section">
                <h1 class='mb-12 font-weight-bold heading-title text-center'>
                  Request A
                  <span class='text-primary'>QUOTE </span>
                </h1>
                <v-form class="myinput">
                  <div v-for="(textField, i) in textFields"
                   :key="i" 
                   class="text-fields-row"
                   >
                <div class="text-center partsName">
                <v-text-field
                   label="Part Name"
                   outlined
                   v-model="textField.value2"
                   class="part-textField"
                >
                </v-text-field>
                <v-btn @click="remove(i)"
                   class="error mt-2
                   ml-5"
                 >
                   delete
                </v-btn>
                </div>
                <v-textarea
                   outlined
                   v-model="textField.value1"
                   name="input-7-4"
                   label="Your Message"
                   placeholder="Your Message for Mechanic"
                   maxlength="12"
                >
                </v-textarea>
                </div>

                <div class="text-center button">
                <v-btn
                   @click="add"
                   class="primary"
                >
                   add
                </v-btn>
                <v-btn 
                   class="subscribe-btn"
                   color="primary"
                   dark
                   large
                >
                   Submit
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
        textFields: [],
      }
    },
    methods: {
     add () {
        this.textFields.push({ 
          value: "",
          value2: ""
        })
     },
    
     remove (index) {
         this.textFields.splice(index, 1)
     }
  }
  }
</script>
<style lang="scss" scoped>
.letter-image{

    margin-top: 120px;
}
.subscribe-section{

    margin-top: 120px;
}
.subscribe-section .part-textField{
      width: 300px;
}
.subscribe-section .partsName{

    display: inline-flex;
}

</style>