<template>
  <page-layout-v2
    title="Car Diagnostic Test | Book Your Car Diagnostic"
    sub-heading="Keep your car in a top-notch condition | Book a diagnostic now"
    heading-bg-static='https://static.manyautosltd.com/uploads/hands-mechanic-using-diagnostic-tool.jpg'
    box-title='Book your car diagnostic test now'
    :faqs='faqs'
    faq-topic='Get your car diagnosed with ManyAutos'
    blog-topic='Know more about vehicle diagnostics with ManyAutos'
    redirect-to='/booking/create/diagnostics'
    :breadcrumbs='breadcrumbs'
  >
    <template #overview>
      <p>
        The Engine Control Unit (ECU) frequently monitors the performance of the vehicle. Many potential error codes may only be read by specialist vehicle diagnostic equipment. A warning light can show on the dashboard alerting an issue to you, a diagnostic check would be required to fully understand the whole extent and reason for the problem.
      </p>
      <p>
        Our Car Diagnostic Engine management systems present new hurdles for today's modern automotive workplaces and ECU faults are becoming a greatly common part of our daily operations. We continuously invest in the latest UK code technology to give professional car diagnostics in the UK that rectify a full range of sub-system issues.
      </p>
    </template>
    <template #blog>
      <h2 class="font-weight-600">
        What is a car diagnostic test?
      </h2>
      <p>
        A special computerised scanner device is used and plugged into your car to detect the issues regarding your car's engine or other components. This is only possible because there are multiples sensors, processors, and microchips built into our vehicles. The diagnostic tool reveals any issues and conveys a code to the mechanic. After that, it is much simpler and easier to understand your car's problem and rectify it.
      </p>
      <h2 class="font-weight-600">
        Why do I need a diagnostic?
      </h2>
      <p>
        Diagnostic tests are necessary to check the problems within your vehicles that are hard to identify. Before the discovery of car diagnostic tests, the identification of a problem was difficult and also time-consuming. The drivers weren’t aware of the issues and only used to bring the car to the garage after it had suffered a severe malfunction. The test helps you to know about the problem even before it causes a breakdown. The tools can also check the history of the vehicle, which gives the mechanics an insight into the repairs they should perform. 
      </p>
      <h2 class="font-weight-600">
        How long does a car diagnostic test take?
      </h2>
      <p>
        A full car diagnostic test takes up to an hour. You can either wait while your car undergoes the check or you can leave the vehicle with our skilled and trustable team at the garage. You can come and pick your car up after it has been inspected. 
      </p>
      <h2 class="font-weight-600">
        What do warning lights in cars mean?
      </h2>
      <p>
        There are a total of 5 warning light colours. The two colours that you are most likely to come across are red and orange. 
      </p>
      <p>
        Red warning light points to serious issues and they require attention immediately. You should be careful. It is a better option to stop the car as soon as you get the chance. 
      </p>
      <p>
        The orange light is just a warning but should be checked out when you get the chance. 
      </p>
      <h2 class="font-weight-600">
        Can you drive with warning lights?
      </h2>
      <p>
        The severity of the problem depends on the colour of the light. If the red light is flashing, then you should stop driving. The red light is a dangerous fault and needs to be checked immediately. If the warning light is amber or any other colour, then it is okay to keep driving, but you should get it checked as soon as possible. 
      </p>
      <h2 class="font-weight-600">
        How often should a car undergo diagnostic testing?
      </h2>
      <p>
        You don't need to wait for the warning light to start blinking and then take your vehicle for a diagnostic test. If you feel that anything is a little “off”, you should instantly take it for inspection. It is a good thing to take your car for a diagnostic check yearly. It will uncover any hidden minor issues which cannot be indicated by the check engine light.
      </p>
      <h2 class="font-weight-600">
        Car diagnostic and repairs with Manyautos.
      </h2>
      <p>
        Now you don’t have to worry about the question that “Which <b>car diagnostic garage near me</b> is the best for my car?” because we have got you covered. We believe in offering a full-service range that caters to every part, component, and feature of your vehicle
      </p>
      <p>
        Our accident repairs in our UK Garage are amongst the best available in the area. We use the latest dent removal and refinishing techniques, water-based materials, and SMART repair technology to restore bodywork and paintwork. From a minor dent to major collision damage, we can do it all!
      </p>
      
    </template>

    <!-- <div style='padding-top: 50px;'>
      <car-service-table></car-service-table>
    </div> -->
  </page-layout-v2>
</template>

<script>
import PageLayoutV2 from "@/layouts/page-layout-v2";

const URL = process.env.APP_URL;

export default {
  components: {
    PageLayoutV2,
  },

  data: () => ({
    panel: 0,
    faqs: [
      {
        title: "How much will a diagnostic cost?",
        content:
          `
           A complete diagnostic test cost you up to £50 for almost all type of cars. Sports cars and luxury vehicles may cost around £70. With Manyautos you will get the best service at a competitive price.
          `,
      },
      {
        title: "What can a car diagnostic test tell you?",
        content:
          "A car diagnostic test is used to identify the faults in your vehicle and read the error codes. You need to know what the flashing warning light is referring to. It can tell you about the issues regarding your car’s engine, exhaust system, transmission, and brakes. It also gives information about the working of crankshaft and camshaft position, the airflow and coolant temperatures. ",
      },
      {
        title: "How do I know what's wrong with my car?",
        content:
          `
            The driver may sense an unusual feeling, noise, or smell coming from the vehicle while driving or braking. If this happens, it is important to get a diagnosis before the issue becomes huge and difficult to handle.
            <br />
            <br />
            If there are no visible signs or clues that something is wrong, then the technicians use specialized equipment and software to identify the component causing the problem.
          `,
      },
    ],
    breadcrumbs: [
      { to: '/car-diagnostics', exact: true, text: 'Car Diagnostics'}
    ]
  }),

  mounted() {
    if (this.$device.ismobile) return (this.panel = null);
  },

  head: {
    title: "Car Diagnostic Test",

    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Looking for a car diagnostic test? Because you are not sure why your car is acting up. Book a test now with Manyautos. We will identify the issue and resolve it as well. ",
      },
      {
        name: "keywords",
        content:
          "Car diagnostic, Car diagnostic near me, Car diagnostic garage near me",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Car Diagnostic Test",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: process.env.APP_URL + '/car-diagnostics',
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://static.manyautosltd.com/uploads/hands-mechanic-using-diagnostic-tool.jpg",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "ManyAutos LTD",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Looking for a car diagnostic test? Because you are not sure why your car is acting up. Book a test now with Manyautos. We will identify the issue and resolve it as well. ",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Car Diagnostic Test",
      },
      {
        name: "twitter:description",
        content:
          "Looking for a car diagnostic test? Because you are not sure why your car is acting up. Book a test now with Manyautos. We will identify the issue and resolve it as well. ",
      },
      {
        name: "twitter:image",
        content: "https://static.manyautosltd.com/uploads/hands-mechanic-using-diagnostic-tool.jpg",
      },
      {
        itemprop: "image",
        content: "https://static.manyautosltd.com/uploads/hands-mechanic-using-diagnostic-tool.jpg",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "business.business",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
.container .myheading {
  font-weight: 200;
  padding-top: 50px;
  color: black;
}

.accordion {
  border: 0;
  color: black;
  display: block;
  background-color: #efefef;
  border: 1px solid #ececec;
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  text-align: left;
  border-radius: 5px;
  margin-bottom: 10px;
}
h3 {
  color: black;
  font-weight: 200;
  padding-top: 20px;
  padding-bottom: 20px;
}
.accordion:hover {
  color: #17a2b8;
  text-decoration: underline;
}
.h3-service-heading {
  font-weight: 200;
  font-size: 17px;
}
.h2-service-heading {
  font-weight: 200;
}
.h2-service-heading-months {
  font-weight: 250;
}
@media (min-width: 1265px) {
  span.h5-service-heading.full.text-blue {
    margin-left: 20px;
  }
}
@media (min-width: 1265px) {
  span.h5-service-heading.initial.text-blue {
    margin-left: 25px;
  }
}
.h5-service-heading {
  color: #00b4d8;
  font-size: 15px;
}

.fa {
  color: #00b4d8;
  font-size: 1.2em;
}

hr {
  width: 100%;
}
h4 {
  color: #00b4d8;
  border: 0;
  display: block;
  background-color: whitesmoke;
  border: 1px solid #ececec;
  padding: 10px 20px;
  font-size: 15px;
  width: 100%;
  text-align: left;
}

a {
  color: #00b4d8;
}
.service-side-bar-links a {
  color: black;
  text-decoration: underline;

  font-weight: 200;
}
.service-side-bar-links a:hover {
  color: #00b4d8;
}

.card-header {
  background: whitesmoke;
  border: 1px solid #ececec;
  color: #1ea5c7;
  padding: 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: normal;
}
.card-header-body {
  background-color: #fff;
  padding-top: 16px;
}
.v-expansion-panel-content__wrap {
  padding: 0px;
  flex: 1 1 auto;
  max-width: 100%;
}

@media (max-width: 768px) {
  .landing-page-container .full1 {
    margin-left: 24px;
  }
}
</style>