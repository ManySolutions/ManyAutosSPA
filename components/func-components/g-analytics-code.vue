<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-175329070-1");
    // END Google Tag Manager

    // var _smartsupp = _smartsupp || {};
    // _smartsupp.key = "002fcc499d709c8a14ff2251e79c9b4c94eb533a";
    // window.smartsupp ||
    //   (function (d) {
    //     var s,
    //       c,
    //       o = (smartsupp = function () {
    //         o._.push(arguments);
    //       });
    //     o._ = [];
    //     s = d.getElementsByTagName("script")[0];
    //     c = d.createElement("script");
    //     c.type = "text/javascript";
    //     c.charset = "utf-8";
    //     c.async = true;
    //     c.src = "https://www.smartsuppchat.com/loader.js?";
    //     s.parentNode.insertBefore(c, s);
    //   })(document);
    // END SmartsUpp

    (function (i, s, o, g, r, a, m) {
      i["GoogleAnalyticsObject"] = r;
      (i[r] =
        i[r] ||
        function () {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "https://www.google-analytics.com/analytics.js",
      "ga"
    );

    ga("create", "UA-103265211-1", "auto");
    ga("send", "pageview");
    // END Google Analytics
  },
};
</script>