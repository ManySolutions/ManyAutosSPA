<template>
  <div>
    Redirecting...
  </div>
</template>

<script>


export default {

  middleware({ redirect }) {
    return redirect(301, '/car-repairs/brake-pads-repair-and-replacement')
  },

};
</script>
