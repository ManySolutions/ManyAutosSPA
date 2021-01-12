<template>
  <div>

    <!-- Google Tag Manager (noscript) -->
    <!-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NSDC9RR"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> -->
    <!-- End Google Tag Manager (noscript) -->

  </div>
</template>

<script>
export default {
  mounted() {
    if (process.client && window.location.host == 'manyautosltd.com') {
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = "002fcc499d709c8a14ff2251e79c9b4c94eb533a";
      window.smartsupp ||
        (function (d) {
          var s,
            c,
            o = (smartsupp = function () {
              o._.push(arguments);
            });
          o._ = [];
          s = d.getElementsByTagName("script")[0];
          c = d.createElement("script");
          c.type = "text/javascript";
          c.charset = "utf-8";
          c.async = true;
          c.src = "https://www.smartsuppchat.com/loader.js?";
          s.parentNode.insertBefore(c, s);
        })(document);
      // END SmartsUpp
    }
  },
};
</script>