<template>
  <page-layout-v2
    title="Air Filter Replacement"
    sub-heading="Keep your car safe, book a service now!"
    heading-bg='customer-v2/static-pages/allpics/airfilterreplacement1 .jpg'
    heading-img='https://static.manyautosltd.com/uploads/car-service-page-part-image.png'
    box-title='Book your air filter now'
    :faqs='faqs'
    faq-topic='How air filter replacement works with ManyAutos'
    blog-topic='Things you should know about an Air Filter'
    :list-menu='listMenu'
    redirect-to='/booking/create/parts'
    :has-repair-pages='false'
  >
    <template #overview>
      <p>
        The air filter is one of the many components on a vehicle that requires replacement with time. Although it might
        not seem like something huge, it plays a major part in the proper functioning of your vehicle. Here at
        Manyautos, we treat every repair and replacement with the same enthusiasm and care. Our professionals will take
        a look at your vehicle and let you know if the air filter needs to be replaced. We only use authentic equipment
        and parts for the replacements. Our professionals will take a look at your vehicle and let you know if the air
        filter needs to be replaced.
      </p>
    </template>
    <template #blog>
      <h2 class="font-weight-600">
        What are the common signs of a clogged air filter?
      </h2>
      <p>
        Common signs of a clogged and dirty air filter are:
      </p>
      <ul>
        <li>Reduced fuel economy</li>
        <li>A Misfiring engine</li>
        <li>Weird and unusual engine sounds</li>
        <li>The check engine light comes on</li>
        <li>The air filter looks dirty</li>
        <li>Experiences reduced horsepower</li>
        <li>The smell of gasoline when starting the car</li>
      </ul>
      <h2 class="font-weight-600">
       What happens if you don't change the air filter in a car?
      </h2>
      <p>
          The first thing that will happen is your check engine light will turn on. It will not cause extreme damage but
          if you ignore the air filter for too long, it will cause the engine to stop running. The dust and debris from
          outside build up with time and cause damage to the combustion chamber. The engine would not be able to suck
          enough air into the combustion chambers and the engine will run rich (i.e. more gas and less air).
      </p>
      <h2 class="font-weight-600">
        What is the importance of replacing air filter?
      </h2>
      <strong>A dirty filter increases the maintenance costs</strong>
      <p>
        The damage done by a neglected filter will cause the car to break down and the repair cost would be way more
        than the price of an air filter. If you pay attention to the cleaning and maintenance of the small parts of your
        car, then you wouldn’t have to worry about replacing the whole components.
      </p>
      <strong>Increased fuel efficiency</strong>
      <p>When you replace a dirty air filter, the fuel efficiency will automatically increase and also improve
        acceleration. It depends on the make and model of your vehicle but replacing a clogged filter only benefits your
        car.</p>
      <h2 class="font-weight-600">
        Does changing the car air filter make a difference?
      </h2>
      <p>
        Clogged or dirty air filters reduce the flow of air to the engine, which changes the balance of air and fuel in
        your vehicle. This imbalance can pollute spark plugs, and cause the engine to misfire. This will turn the
        ‘Service Engine’ light on. It will also pollute your surroundings. Just replacing the air filter regularly can
        help you to stay away from all these inconveniences.
      </p>
      <h2 class="font-weight-600">
        Collection and delivery service 
      </h2>
      <p>
        We know that everyone is busy nowadays and you hardly have time to take care of your vehicle and take it to the
        garage for servicing. To make your life easy, we are offering the collection and delivery service free of cost.
        If you have pre-booked our service, and your car is drivable, our team will collect your vehicle from a place of
        your choice and then deliver it back to you after all the repairs are done.
      </p>
      <p>Many Autos operate a fleet of pool cars with a dedicated driver, so wherever we are collecting from, we need to
        be able to leave one of our pool vehicles either in your work parking space or if in a residential area, we
        would need to be able to leave our car either at your house or on the road with a permit if required.</p>
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
        title: "What are the recommendations for air filter replacement?",
        content:
          "The air filter of your vehicle should be changed between 15,000 and 30,000 miles. This also depends on the style of driving and your driving conditions. If you tend to drive more on unpaved roads or you have a turbocharged engine, you need to replace the air filter more often.",
      },
      {
        title: "What is the cost of replacing the air filter?",
        content:
          "An air filter replacement cost depends on the make and model of your vehicle and on the fact that how accessible the air filter housing is. The cost of an air filter including the labour to install the filter can range from $20 to $60.",
      },
      {
        title: "What does an air filter in a car do?",
        content:
          "As humans need oxygen to stay alive, a vehicle needs oxygen for performing the combustion process. The air filter helps in keeping the air clean. It prevents any dust, insects, particles, debris or sand from entering the engine. It keeps the mixture of air and fuel pure to support performance.",
      },
    ],
    listMenu: carRepairPages,
  }),

  mounted() {
    if (this.$device.ismobile) return (this.panel = null);
  },

  head: {
    title: "Car Air Filters| Air Filter Replacement",

    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Need air filter replacement for your car? You’ve come to the right place. Book a service now to replace the dirty air filter and keep your car in a good shape.",
      },
      {
        name: "keywords",
        content:
          "air filter replacement, air filter replacement cost",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Car Air Filters| Air Filter Replacement",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: process.env.APP_URL + '/air-filter-replacement',
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/airfilterreplacement1 .jpg",
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
          "Need air filter replacement for your car? You’ve come to the right place. Book a service now to replace the dirty air filter and keep your car in a good shape.",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Car Air Filters| Air Filter Replacement",
      },
      {
        name: "twitter:description",
        content:
          "Need air filter replacement for your car? You’ve come to the right place. Book a service now to replace the dirty air filter and keep your car in a good shape.",
      },
      {
        name: "twitter:image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/airfilterreplacement1 .jpg",
      },
      {
        itemprop: "image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/airfilterreplacement1 .jpg",
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