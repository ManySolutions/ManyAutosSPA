<template>
  <v-dialog
    v-model="dialog"
    width="500"
    transition="dialog-top-transition"
    @click:outside='handleDialogClose'
  >
    <v-form>
      <v-card>
        <v-card-text>
          <car-reg-form 
            hasNoBg 
            fullwidth
            :title='title'
            @success='handleSuccess'
            :hasNoRedirect="hasNoRedirect"
            @notfound='handleDialogClose'
            large
          ></car-reg-form>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script>
import { mapState } from 'vuex';
import carRegForm from '~/components/func-components/car-reg-form.vue';

export default {
  components: { carRegForm },
  props: {
    title: {
      type: String,
      default: 'Enter your car reg'
    },
    btnText: {
      type: String,
      default: 'Get Instant Pricing'
    },
    active: {
      type: Boolean,
      default: false,
    },
    hasNoRedirect: Boolean,
  },
  computed: {
    ...mapState('booking', ['regDialog']),

    dialog() {
      return this.regDialog || this.active;
    },
  },
  methods: {
    handleSuccess(res) {
      this.$store.commit(`booking/TOGGLE_REG_DIALOG`, false);

      this.$emit('success', res);
      this.$emit('close');
    },

    handleDialogClose() {
      this.$store.commit(`booking/TOGGLE_REG_DIALOG`, false)

      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .reg-form-sec {
    padding: 0px;
  }
}
</style>