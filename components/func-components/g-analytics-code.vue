<template>
  <div>

    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NSDC9RR"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

  </div>
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


    // Google Tag Manager
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NSDC9RR');
    // End Google Tag Manager
  },
};
</script>