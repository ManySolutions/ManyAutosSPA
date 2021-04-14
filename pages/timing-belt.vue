<template>
  <page-layout-v2
    title="Timing Belt Repair, Replacement and Service"
    sub-heading="Save your engine, book a service now."
    heading-bg-static='https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/timingbelt1.jpg'
    heading-img='https://static.manyautosltd.com/uploads/car-service-page-part-image.png'
    box-title='Book your timing belt repair now'
    :faqs='faqs'
    faq-topic='How timing belt repair and replacement work with ManyAutos'
    blog-topic='Want to know more about Cambelt replacement?'
    :list-menu='listMenu'
    redirect-to='/booking/create/search?keyword=Camshaft'
    :has-repair-pages='false'
  >
    <template #overview>
      <p>
        It is essential to replace your timing belt according to your car’s manufacturers schedule. 
        A broken belt can cause serious damage to the engine. Our professional team of mechanics 
        thoroughly inspects your car and replaces the belt if required. It is often cost-effective 
        to replace your Water Pump at the same time so don't be surprised if we suggest it.
      </p>
    </template>
    <template #blog>
      <h2 class="font-weight-600">
        What is a timing belt?
      </h2>
      <p>
        The timing belt is one of the most vital parts of the working system in your engine. The timing belt or Cambelt is made of sturdy materials like polyurethane/rubber and has teeth on it.
      </p>
      <h2 class="font-weight-600">
        How does a Cambelt work?
      </h2>
      <p>
        The main purpose of the Cambelt is to regulate the way your engine works. It controls the timing of your car’s internal combustion engines. It is responsible for opening and closing of the valves in time, so correct combustion in the engine is ensured. To complete its mission, it makes sure that the crankshaft and the camshaft always rotate in sync.
      </p>
      <h2 class="font-weight-600">
        What happens if a timing belt snaps while driving?
      </h2>
      <p>
        When the Cambelt breaks, the camshaft stops turning and leaves the engine valves open. The continuous rotation of the crankshaft causes pistons to crash into the open valves. This will bend or break the pistons and also the cylinders. Damaged cylinders and pistons will require the engine to be replaced. 
      </p>
      <h2 class="font-weight-600">
        Can low oil cause the Cambelt to break?
      </h2>
      <p>
        If the tensioner of your timing belt is pressurized by the engine oil, then a low amount of oil will cause it to fail. The oil is also mandatory for the camshafts to operate. Without the proper flow of oil, they would lock up and cause the Cambelt to break. 
      </p>
      <h2 class="font-weight-600">
        How much for timing belt replacement?
      </h2>
      <p>
        The <b>timing belt replacement cost</b> widely depends on the make and model of your vehicle and also the place from where you choose to get it replaced. Normally, the cost ranges from £200 to £500.
      </p>
      <h2 class="font-weight-600">
        Will a broken timing chain destroy my engine?
      </h2>
      <p>
        If the belt is already damaged, then the engine won’t even start. But if the timing belt snaps while driving, then the valves will bend and the pistons will get damaged because of the contact between them. This will in turn ruin the engine and cause it to fail. 
      </p>
      <h2 class="font-weight-600">
        Free collection and delivery service
      </h2>
      <p>
        We are aware of the fact that everyone is busy nowadays and you hardly have time to take your car to the garage for servicing. To make your life easy, we are offering the collection and delivery service free of cost. If you have pre-booked our service, our team will collect your vehicle from a place of your choice and then deliver it back to you after all the repairs are done. 
      </p>
      <p>
        Many Autos operate a fleet of pool cars with a dedicated driver, so wherever we are collecting to leave one of our pool vehicles either in your work parking space or if near your house, we would need to be able to leave our car either at your house or on the road with a permit if required. We would be grateful if you consider this before booking our free Collection and delivery service.
      </p>
      
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
        title: "What are the symptoms of a broken or snapped timing belt?",
        content:
          `
            Your timing belt is bound to wear out eventually because of cracking, tearing or snapping. 
            Several signs will let you know that your <strong>timing belt</strong> is broken. 
            Some of them are:
            <ul>
              <li>You will hear weird noises coming from the engine. It is more likely to emanate a ‘ticking sound’. </li>
              <li>The check engine light flashes continuously.</li>
              <li>It is hard for you to start the car and the engine misfires.</li>
              <li>The engine won’t turn over.</li>
              <li>You will notice some leaking front the front side of the motor.</li>
            </ul>
          `,
      },
      {
        title: "How long can a timing belt last?",
        content:
          "The lifespan of a timing belt depends on the manufacturer of that car, but a timing belt is supposed to work efficiently for 3-6 years and 60,000-100,000 miles. ",
      },
      {
        title: "Should I replace the water pump along with the timing belt?",
        content:
          "The Cambelt and the water pump have the same estimated lifespan. It is not compulsory to change the water pump every time you get your belt replaced, but it is highly recommended. The operations that they perform are dependent on each other, and you need to remove the water pump to reach the timing belt. There is no good reason to replace one without the other.",
      },
    ],
    listMenu: carRepairPages,
  }),

  mounted() {
    if (this.$device.ismobile) return (this.panel = null);
  },

  head: {
    title: "Timing Belt | Vehicle Timing Belt",

    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Get your timing belt inspected and replaced. Based on the mileage our professional will let you know if Cambelt replacement is necessary. Find the best garages for replacement at affordable prices.",
      },
      {
        name: "keywords",
        content:
          "Timing belt, timing belt replacement, timing belt replacement cost, Cambelt replacement.",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Timing Belt | Vehicle Timing Belt",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: process.env.APP_URL + '/timing-belt',
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/timingbelt1.jpg",
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
          "Get your timing belt inspected and replaced. Based on the mileage our professional will let you know if Cambelt replacement is necessary. Find the best garages for replacement at affordable prices.",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Timing Belt | Vehicle Timing Belt",
      },
      {
        name: "twitter:description",
        content:
          "Get your timing belt inspected and replaced. Based on the mileage our professional will let you know if Cambelt replacement is necessary. Find the best garages for replacement at affordable prices.",
      },
      {
        name: "twitter:image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/timingbelt1.jpg",
      },
      {
        itemprop: "image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/timingbelt1.jpg",
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