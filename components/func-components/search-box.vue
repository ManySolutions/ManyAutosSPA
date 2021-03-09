<template>
  <v-form>
    <v-autocomplete
      v-model='form.keyword'
      :items='searchKeywords'
      :filled='boxStyle == `solo`' 
      :solo='boxStyle == `solo`'
      :outlined='boxStyle == `outlined`'
      full-width
      label="Search for any service, repair or diagnostics"
      clearable
      :loading="isLoading"
      @input="handleInput"
      hide-details
      background-color="white"
    ></v-autocomplete>
  </v-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: {
    boxStyle: {
      default: 'solo',
      type: String,
    }
  },

  data: () => ({
    form: {
      keyword: '',
    },
  }),

  computed: {
    ...mapState('booking', ['modelId', 'searchKeywords']),

    isLoading() {
      return !this.searchKeywords.length;
    },
  },

  watch: {
  },

  mounted() {
    this.getSearchKeywords();
    this.form.keyword = this.$route.query.keyword || '';
  },

  methods: {
    ...mapActions('booking', ['getSearchKeywords']),

    handleInput(keyword) {
      this.$router.push({
        name: 'booking-create-search',
        query: {
          keyword
        }
      })
    }
  },
}
</script>