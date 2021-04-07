<template>
  <page-layout-v2
    title="Brake Pad Repair & Replacement"
    sub-heading="Keep your car safe, book a service now!"
    heading-bg='customer-v2/static-pages/allpics/brakepads1.jpg'
    heading-img='https://static.manyautosltd.com/uploads/car-service-page-part-image.png'
    box-title='Book your brake pads repair now'
    :faqs='faqs'
    faq-topic='Brake pads repair and replacement with ManyAutos'
    blog-topic='How the brake pads repair and replacement work with ManyAutos'
    :list-menu='listMenu'
    redirect-to='/booking/create/search?keyword=pad'
    :has-repair-pages='false'
  >
    <template #overview>
      <p>
        We offer a free brake health check with every service we carry out. Our qualified technicians are specifically
        trained for this, so you know that you are getting an expert service. You don’t have to search online for ‘brake
        pad repair service or brake pads fitted near me’, just book a service at Manyautos. We repair your vehicle using
        authentic equipment and also provide a guarantee.We offer a free brake health check with every service we carry
        out. Our qualified technicians are specifically trained for this, so you know that you are getting an expert
        service. You don’t have to search online for ‘brake pad repair service or <strong>brake pads fitted near me</strong>, just book
        a service at Manyautos. We repair your vehicle using authentic equipment and also provide a guarantee.
      </p>
      <p>
        When thinking about the braking system of a car, most people are unaware of the different components involved in
        this. The brakes are one of the most important parts of a car. You need your brakes to be in full working order
        to avoid any nasty accidents, so brake repair is vital.
      </p>
    </template>
    <template #blog>
      <h2 class="font-weight-600">
        What are brake pads?
      </h2>
      <p>
        They are the main component of the disc brakes. They are used in automotive brake systems. Brakes pads consist
        of steel backing plates with the friction material confined to the surface and facing the disc brake.
      </p>
      <h2 class="font-weight-600">
        What is the purpose of the brake pads?
      </h2>
      <p>
          The main purpose of the brake pads is to slow down or completely stop the vehicle. They convert the kinetic
          energy into thermal energy by using friction.
      </p>
      <h2 class="font-weight-600">
        How do the brake pads work?
      </h2>
      <p>
        When you press the brake pedals, pressurized brake fluid travels through the brake pipe into the pistons of the
        callipers. The pistons will then force shut the calliper. The brake pads are fitted inside the 
        <NuxtLink to="/brake-caliper">brake caliper</NuxtLink> and have a friction compound. When the callipers are forced shut
        via the pistons, the brake pads
        encounter the rotating car disc brake, causing it to either slow down or eventually come to a stop.
      </p>
      <h2 class="font-weight-600">
        What happens if you don't change the brake pads on your car?
      </h2>
      <p>
        If you don’t change the brake pads on time, all the friction material will wear out and the pad metal will wear
        on the brake discs. Eventually, you will be metal on metal and things tend to wear out fast then. The callipers
        cups would try to stop the vehicle once the pad backing falls out. This will damage the callipers as well as the
        brake discs. This can cause fatal accidents and If you survive the whole experience the cost of repair will be
        huge.
      </p>
      <h2 class="font-weight-600">
        What are the signs that show brake pad replacement is needed? 
      </h2>
      <p>
        You can often tell when your car requires new brakes. A squealing and scraping noise coming from your braking
        system means that something is not working correctly and must be replaced. The squealing sound is caused by
        worn-out friction surfaces on the brake pads rubbing or pushing against the brake discs. The sounds that the car
        should not make include:
        <ul class="mt-3 mb-3">
          <li>Grinding</li>
          <li>Squealing</li>
          <li>Screeching</li>
          <li>Scraping</li>
          <li>Clicking</li>
        </ul>
        <strong>Some of the other symptoms are as follows:</strong>
        <ul class="mt-3 mb-3">
          <li>The Brake Warning Light Comes On</li>
          <li>Low Brake Fluid Level</li>
          <li>Depressed/Sinking Brake Pedal</li>
          <li>Contaminated Brake Fluid</li>
          <li>Abnormal Brake Pedal Behaviour</li>
        </ul>
      </p>
      <h2 class="font-weight-600">
        What should I get first, the back brake pad or the front brake pad replacement?
      </h2>
      <p>
        You should make sure to replace either both the back pads, both the front pads or all the pads together so you
        can get balanced brakes. Importantly, brake pads servicing is key to ensure that the brake system will work
        correctly and effectively. Always service the brake pads and get the <strong>brake repair</strong> done according to the
        guidelines given in the manufacturer’s manual.
      </p>
      <h2 class="font-weight-600">
        Collection and delivery at no extra cost
      </h2>
      <p>
        The worst part of getting a vehicle repaired is to bring it to a car repair centre. Which is why we are offering
        the collection and delivery service for our customers. You don’t have to look for a garage for brake pads
        replacement near you. If you prearrange a collection, our team will pick your car up from your residence or your
        place of work and drive it to our premises, carry out all the necessary work (having consulted you) and deliver
        it back to you at the end of the day.
        <ul class="mt-3">
          <li>Don't want to waste your day off?</li>
          <li>You don't have free time to take your car to the garage for repairs?</li>
        </ul>
      </p>
      <p>
        Many Autos operate a fleet of pool cars with a dedicated driver, so wherever we are collecting to leave one of
        our pool vehicles either in your work parking space or if near your house, we would need to be able to leave our
        car either at your house or on the road with a permit if required. We would be grateful if you consider this
        before booking our free Collection and delivery service.
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
        title: "When should you consider replacing Brake Pads?",
        content:
          "Normally, the brake pads are supposed to be replaced every 40,000 to 50,000 miles. This number can differ depending on the styles and conditions of driving.",
      },
      {
        title: "What is the minimum thickness for brake pads replacement?",
        content:
          "The friction material present on a brand new brake pad is typically 8-12mm thick, and the ones that are ready to be replaced are worn down to about 3 millimetres.",
      },
      {
        title: "How much does it cost to have your brake pads repaired and replaced in the UK?",
        content:
          "The average cost for the replacement of your brake discs and pads is £252. The costs can range between £140 to £400. However, the cost of replacements depends on different factors like the model and make of the vehicle and the area where you live.",
      },
    ],
    listMenu: carRepairPages,
  }),

  mounted() {
    if (this.$device.ismobile) return (this.panel = null);
  },

  head: {
    title: "Brake pads repair and replacement",

    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Brake pad repair and maintenance is as important as oil change or any other services. Register in our system and book a service for your pads now.",
      },
      {
        name: "keywords",
        content:
          "Brake repair, brake pad repair, brake repair service, brake pads fitted near me, brake pads replacement near me, front brake pad replacement",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Brake pads repair and replacement",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: process.env.APP_URL + '/brake-pads',
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/brakepads1.jpg",
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
          "Brake pad repair and maintenance is as important as oil change or any other services. Register in our system and book a service for your pads now.",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Brake pads repair and replacement",
      },
      {
        name: "twitter:description",
        content:
          "Brake pad repair and maintenance is as important as oil change or any other services. Register in our system and book a service for your pads now.",
      },
      {
        name: "twitter:image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/brakepads1.jpg",
      },
      {
        itemprop: "image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/brakepads1.jpg",
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