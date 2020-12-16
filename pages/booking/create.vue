<template>
  <div>
    <NuxtChild 
      :vehicleName='vehicleName'
      :motPrice='motPrice'
      :modelId='modelId'
      :vehicle='vehicle'
    />
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';

export default {
  data: () => ({
    
  }),
  computed: {
    ...mapState('booking', ['modelId', 'vehicle']),
    ...mapState('settings', ['motPrice']),
    ...mapGetters('booking', ['vehicleName']),
  },
  mounted() {
    if (!this.modelId || !this.vehicle.Model_ID) {
      this.$router.push('/');
    }
  }
}
</script>