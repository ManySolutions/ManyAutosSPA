<template>
  <v-card elevation="0">
    <v-card-title class='text-center justify-content-center'>
      <h1 class='heading__title text-center'>
        Get a <span class='primary--text'>Quote</span> For 
        <br />Your Repairs
      </h1>
    </v-card-title>
    <v-card-text class='pt-13'>
      <v-stepper 
        v-model="step" 
        style='max-width: 800px; margin: auto'
      >
        <v-stepper-header>
          <v-stepper-step :complete='step > 1' step=1>
            {{ isAuth ? 'Request Quote Now' : 'Quote Details' }}
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete='step > 2' step=2>
            Finish
          </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step=1>
            <v-form>
              <div 
                v-for='(item, i) in form.parts'
                :key='i'
                class='mb-5'
                :class='form.parts.length > 1 ? "d-table w-100" : ""'
              >
                <div :class='form.parts.length > 1 ? "d-table-cell" : ""'>
                  <v-text-field
                    outlined
                    label="Name of the Repair"
                    placeholder="i.e. Cooling System"
                    hide-details
                    class='mb-2'
                    v-model="form.parts[i].name"
                    dense
                  ></v-text-field>
                  <v-textarea
                    outlined
                    label='Note for the problem'
                    placeholder="Any message related to car part's problem"
                    hide-details
                    v-model="form.parts[i].info"
                    dense
                  ></v-textarea>
                </div>
                <div 
                  v-if='form.parts.length > 1'
                  class='d-table-cell text-right'  
                >
                  <v-btn
                    color='red darken-1'
                    dark
                    @click="handleRemove(i)"
                    small
                    class='ml-2'
                    fab
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </div>
              </div>
              <v-btn
                color='success darken-1'
                dark
                @click="handleAdd"
              >
                <v-icon>mdi-plus</v-icon>
                Add More
              </v-btn>
              <div class='mt-5'>
                <v-btn
                  :color='isAuth ? "success" : "primary" '
                  x-large
                  block
                >
                  {{ isAuth ? 'Request Quote Now' : 'Next' }}
                </v-btn>
              </div>
            </v-form>
          </v-stepper-content>
          <v-stepper-content step='2'>
            ...
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card-text>
  </v-card>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  props: {
  },
  data: () => ({
    form: {
      parts: [
        {name: '', info: ''}
      ],
      name: '',
      email: '',
    },
    step: 1,
  }),
  computed: {
    ...mapGetters('user', ['isAuth'])
  },
  methods: {
    handleAdd() {
      this.form.parts.push(
        {name: '', info: ''}
      );
    },
    handleRemove(i) {
      this.$delete(this.form.parts, i);
    }
  }
}
</script>

<style lang="scss" scoped>
h1.heading__title {
  font-size: 38px;
  font-weight: 700;
  line-height: initial;
}
form {
  max-width: 400px;
  margin: 10px auto 0px;
}
</style>