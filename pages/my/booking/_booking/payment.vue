<template>
  <div>
    <client-only>
      <payment-bootstrap></payment-bootstrap>
    </client-only>
  </div>
</template>

<script>
import paymentBootstrap from './__components/payment-bootstrap.vue'
export default {
  components: { paymentBootstrap },
}
</script>