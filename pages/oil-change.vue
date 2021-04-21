<template>
  <page-layout-v2
    title="Oil Change"
    sub-heading="Have your oil changed. Book a service now!"
    heading-bg='customer-v2/static-pages/allpics/oilchange1.jpg'
    box-title='Book your oil change now'
    :faqs='faqs'
    faq-topic='Oil change with ManyAutos'
    blog-topic='Learn more about oil change in vehicles'
    :list-menu='listMenu'
    redirect-to='/booking/create/search?keyword=filter'
    :has-repair-pages='false'
  >
    <template #overview>
      <p>
        The life of a vehicle depends on multiple factors. One of the most important factors is the regular maintenance
        of the car. People tend to ignore their vehicle and not provide the care and attention when they need it the
        most. The most necessary maintenance is to change the oil regularly.
      </p>
      <p>
        Our professional mechanics inspect your car and let you know when an oil change is required. You can get the <strong>oil
        change service</strong> from a trusted garage like Manyautos, at an affordable price.
      </p>
    </template>
    <template #blog>
      <h2 class="font-weight-600">
        What is engine oil?
      </h2>
      <p>
        The main job of engine oil is to provide the proper amount of lubrication to all the engine parts, that are
        always moving and can cause friction. The friction increases the wear and tear of the engine parts, which is why
        lubricant is necessary to keep them in a good shape.
      </p>
      <h2 class="font-weight-600">
       What happens if the engine oil is not topped up?
      </h2>
      <p>
          The dirty oil will be more abrasive on the engine if the amount of oil is incredibly low. Replacing the old
          and dirty oil with the new one allows the oil to perform its job efficiently of lubricating the car parts.
          Another reason for changing the engine oil regularly is that the additive present in the oil that reduces
          friction or fight rust run out quickly and the oil becomes useless.
      </p>
      <h2 class="font-weight-600">
        Why do cars need oil changes?
      </h2>
      <p>
        There are a lot of moving parts inside the car’s engine. As these parts move in sync and rub against each other,
        heat is produced due to the friction. This heat can damage the said parts and affect the performance of the
        vehicle. The oil act as a lubricant to reduce friction and also absorb the heat that is produced. This allows
        the parts to work in harmony without overheating.
      </p>
      <h2 class="font-weight-600">
        What happens if your car is low on oil while driving?
      </h2>
      <p>
        Lack of engine oil, or contaminated oil will cause more engine wear and cause more problems. Running out of oil
        can cause the engine to fail. It will seize up and also stall the vehicle.
      </p>
      <h2 class="font-weight-600">
        Are oil changes important?
      </h2>
      <p>
        The components of the oil break down over time and become dirty and contaminated by debris, dirt, and dust. It
        becomes contaminated from the surroundings or the engine. That is the reason why an oil change is necessary to
        maintain the engine lubrication and good performance. 
      </p>
      <h2 class="font-weight-600">
        When should you get an oil and filter change?
      </h2>
      <p>
        It is advised to change the oil and filter with every full service. However, the replacement depends on multiple
        factors like the way of driving or the weather conditions. There was a time when it was compulsory to replace
        the oil every 3000 miles but when it comes to the attest lubricants, they can be changed between 5,000 to 7,500
        miles.
      </p>
      <h2 class="font-weight-600">
        What are the benefits of an oil change?
      </h2>
      <p>
        Regular oil and filter change are really important to ensure the perfect performance of the vehicle’s engine. An
        oil change involves draining the old oil from the tank and putting in the fresh one and also replacing the used
        oil filter. It benefits us in many ways. The clean oil provides the perfect lubrication to the components and
        increases the efficiency of the car. 
      </p>
      <h2 class="font-weight-600">
        Does oil change affect performance?
      </h2>
      <p>
        Yes, the oil change affects the performance of the vehicle. Oil and dirty oil tends to lower horsepower, reduce
        engine performance, reduce the vehicle’s mileage, and shortens its life. Just changing the oil can prevent all
        these problems from happening. 
      </p>
      <h2 class="font-weight-600">
        How long does a car oil change take?
      </h2>
      <p>
        A <strong>car oil change</strong> can normally take between 15 to 45 minutes. You can either wait at the garage or leave your
        vehicle with our trusted and professional mechanics, who will perform all the services responsibly.  
      </p>
      <h2 class="font-weight-600">
        Free collection and delivery
      </h2>
      <p>
        We know that everyone is busy nowadays and you hardly have time to take care of your vehicle and take it to the
        garage for servicing. To make your life easy, we are offering the collection and delivery service free of cost.
        All these years you might have been searching online for “the best garage offering <strong>oil change near me</strong>” but that
        time is over now. If you have pre-booked our service, and your car is drivable, our team will collect your
        vehicle from a place of your choice and then deliver it back to you after all the repairs are done.
      </p>
      <p>Many Autos operate a fleet of pool cars with a dedicated driver, so wherever we are collecting from, we need to
        be able to leave one of our pool vehicles either in your work parking space or if in a residential area, we
        would need to be able to leave our car either at your house or on the road with a permit if required. We would
        be grateful if you could bear this in mind when booking to use our free Collection and delivery service.</p>
    </template>

    <!-- <div style='padding-top: 50px;'>
      <car-service-table></car-service-table>
    </div> -->
  </page-layout-v2>
</template>

<script>
import PageLayoutV2 from "@/layouts/page-layout-v2";
import { carRepairPages } from '~/utils/vars';

const URL = process.env.APP_URL;

export default {
  components: {
    PageLayoutV2,
  },

  data: () => ({
    panel: 0,
    faqs: [
      {
        title: "How much should I pay for an oil change?",
        content:
          "The average price of an oil change is £102. It can range between £70 and £160 which is a lot cheaper than replacing the whole engine. So, getting the oil changed regularly will save you a good amount of money.",
      },
      {
        title: "How do you know you need an oil change?",
        content:         
          `
            Multiple signs show that your car needs an oil change to run smoothly. Some of them are:
            <ul>
              <li>Oil becomes dark and dirty. </li>
              <li>Weird and loud engine noises and knocking.</li>
              <li>Oil change warning light in on.</li>
              <li>Excessive smoke produced by the exhaust.</li>
              <li>The cabin smells like oil.</li>
            </ul>
          `,
      },
      {
        title: "How long does a car oil change take?",
        content:
          "An oil change can normally take between 15 to 45 minutes. You can either wait at the garage or leave your vehicle with our trusted and professional mechanics, who will perform all the services responsibly.",
      },
    ],
    listMenu: carRepairPages,
  }),

  mounted() {
    if (this.$device.ismobile) return (this.panel = null);
  },

  head: {
    title: "Engine Oil and Filter Change| Oil Change Near Me",

    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Looking for affordable oil change near you? Professional mechanics at Manyautos provide the best oil change service at a reasonable price.",
      },
      {
        name: "keywords",
        content:
          "oil change, oil change near me, oil and filter change, oil change service, car oil change",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Engine Oil and Filter Change| Oil Change Near Me",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: process.env.APP_URL + '/oil-change',
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/oilchange1.jpg",
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
          "Looking for affordable oil change near you? Professional mechanics at Manyautos provide the best oil change service at a reasonable price.",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Engine Oil and Filter Change| Oil Change Near Me",
      },
      {
        name: "twitter:description",
        content:
          "Looking for affordable oil change near you? Professional mechanics at Manyautos provide the best oil change service at a reasonable price.",
      },
      {
        name: "twitter:image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/oilchange1.jpg",
      },
      {
        itemprop: "image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/oilchange1.jpg",
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