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
      item-text="text"
      item-value='text'
    >
      <template v-slot:item="{ item }">
        <v-list-item-content>
          <v-list-item-title>
            {{ item.text }}
            <v-chip
              :color="item.color || `primary`"
              label
              v-text="item.tag"
              dark
              small
              class='px-2'
            ></v-chip>
          </v-list-item-title>
        </v-list-item-content>
      </template>
    </v-autocomplete>
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