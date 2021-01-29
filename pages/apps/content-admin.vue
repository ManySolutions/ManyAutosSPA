<template>
  <NuxtChild/>
</template>

<script>
export default {
  middleware: ['auth-content-admin'],

  layout: 'content-admin-layout'
}
</script>