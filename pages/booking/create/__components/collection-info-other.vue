<template>
  <div>
    <v-textarea
      v-model='note'
      label="Additional Note for Our Mechanic"
      placeholder="I have a little dent..."
      filled
      rounded
    ></v-textarea>
  </div>
</template>

<script>
import { countryList } from '~/utils/vars';

export default {
  data: () => ({
    note: '',
    attachments: null,
  }),

  watch: {
    note(note) {
      this.$emit('change', this.$data);
    }
  }
}
</script>