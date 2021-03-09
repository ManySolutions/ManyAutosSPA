<template>
  <div>
    <v-alert 
      type='info' 
      :color='color' 
      dismissible
      dark
      v-model="alert"
      :text='isTextable'
    >
      If you cannot find your repair you are looking for?
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color='secondary'
            class='ml-lg-2 mt-2 mt-md-0 font-weight-500'
            v-bind="attrs"
            v-on="on"
          >
            <span class='d-lg-none'>Request Quote Here</span>
            <span class='d-none d-lg-inline-block'>
              Click Here
            </span>
          </v-btn>
        </template>

        <v-card>
          <v-card-actions class='text-right actions-css'>
            <v-spacer></v-spacer>
            <v-btn
              x-large
              text
              fab
              @click='dialog = false'
              class='p-4'
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-actions>
          
          <v-card-text>
            <request-a-quote-form
              @closeWindow='dialog = false'
            ></request-a-quote-form>
          </v-card-text>
        </v-card>
        <!-- /card -->
      </v-dialog>
      <!-- /dialog -->
    </v-alert>
  </div>
</template>
<script>
import { mapState} from 'vuex';
import RequestAQuoteForm from '~/components/func-components/request-a-quote-form.vue';
export default {
  components: { RequestAQuoteForm },
  props: {
    color: {
      default: 'info lighten-1',
      type: String
    },
    isTextable: Boolean
  },
  data: () => ({
    alert: false,
    dialog: false,
  }),
  computed: {
    ...mapState('booking', ['isGetQuoteAlert'])
  },
  watch: {
    alert(alert) {
      this.$store.commit('booking/TOGGLE_GET_QUOTE_ALERT', alert);
    }
  },
  beforeMount() {
    // this.$store.commit('booking/TOGGLE_GET_QUOTE_ALERT', true);
    this.alert = this.isGetQuoteAlert
  },

}
</script>

<style lang="scss" scoped>
.actions-css {
  max-width: 1070px;
  margin: auto;
}
</style>