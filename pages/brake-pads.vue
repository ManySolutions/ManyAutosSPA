<template>
  <div>
    Redirecting...
  </div>
</template>

<script>


export default {

  middleware({ redirect }) {
    return redirect('/car-repairs/brake-pads-repair-and-replacement')
  },

};
</script>
