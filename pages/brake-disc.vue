<template>
  <page-layout-v2
    title="Brake Disc Replacement"
    sub-heading="Keep your car safe, book a service now!"
    heading-bg='customer-v2/static-pages/allpics/brakedisc1.jpg'
    heading-img='https://static.manyautosltd.com/uploads/car-service-page-part-image.png'
    box-title='Book your brake disc now'
    :faqs='faqs'
    faq-topic='Brake disc replacement with ManyAutos'
    blog-topic='Expand your knowledge about brake disc replacement'
    :list-menu='listMenu'
    redirect-to='/booking/create/parts'
    :has-repair-pages='false'
  >
    <template #overview>
      <p>
        Brakes are the most important part of your vehicle’s safety. All the components need to be in top-notch
        condition so the whole system works efficiently. Like any other part of a car, brake discs tend to wear out with
        time. They need to be kept in check because discs with minimum thickness can become a much greater issue than
        you expected.
      </p>
      <p>
        We keep records of your car’s condition with each service. Keeping a close look at the parts that might require
        replacement. You will get the best quality brake discs at Manyautos and high quality service as well.
      </p>
    </template>
    <template #blog>
      <h2 class="font-weight-600">
        What are brake disc?
      </h2>
      <p>
        A brake disc is usually an iron (or carbon composite) disc that is attached to the suspension of a car and is
        gripped by brake pads held in a brake calliper.
      </p>
      <h2 class="font-weight-600">
        What are brake discs used for?
      </h2>
      <p>
          A disc brake is a type of brake that uses the callipers to squeeze pairs of pads against a disc to create
          friction. This action affects the rotation of a shaft, to either slow it down or to bring the car to a
          complete stop.
      </p>
      <p>
        The reason of the car coming to a halt is the friction between the brake disc and the pads. The brake disc has
        numerous advantages over the brake drum, because it dissipates heat quickly, giving a strong and consistent
        braking performance.
      </p>
      <h2 class="font-weight-600">
        What are the symptoms of faulty brake discs?
      </h2>
      <p>
        The symptoms of faulty brake discs can be as following:
      </p>
      <ul>
          <li>Brake light on</li>
          <li>Squealing, grinding or squeaking noises</li>
          <li>Wobbling, scraping or vibration when braking</li>
          <li>Leaking lubricant</li>
          <li>Soft or spongy brake pedals</li>
          <li>Car pulling to one side when braking</li>
      </ul>
      <h2 class="font-weight-600">
        What happens if brake discs are worn?
      </h2>
      <p>
        A burr around the rim can be an indication of a worn-out disc. A more prominent burr means that the disc wear is
        worse. There are certain tools used by experts to measure the thickness of the brake discs.
      </p>
      <p>
        Driving with worn-out brake discs, pads or callipers will make it hard for you to slow or stop the car. All the
        force braking will cause the tires to wear down quicker as well.
      </p>
      <h2 class="font-weight-600">
        When to replace brake discs? 
      </h2>
      <p>
        You need to replace your brake discs once you start noticing the cracks and marks. It is a good practice to
        check the condition of the brakes regularly and look for any visible cracks or marks. Another reason for
        replacement can be the minimum thickness. If the thickness of your pads is below 3mm, then they require
        replacement along with the brake discs.
      </p>
      <h2 class="font-weight-600">
        How long does it take to replace brake pads and discs?
      </h2>
      <p>
        While getting the brake discs and pads replaced, there are various parts of the braking system that may also
        need to be changed. The process of replacing all these components may take a professional mechanic anywhere from
        forty-five minutes to one hour.
      </p>
      <h2 class="font-weight-600">
        Can you change brake discs without changing pads?
      </h2>
      <p>
        People always wonder that why brake discs cannot be replaced without brake pads. Well, there are few reasons for
        that. The topmost reason is that if you only replace the discs then the brand new discs will wear unevenly
        because of the old brake pads and the discs will get damaged. 
      </p>
      <p>
        To ensure a consistent, safe and smooth braking system, it is highly recommended to replace the brake disc and pads at the same time.
      </p>
      <h2 class="font-weight-600">
        Collection and delivery
      </h2>
      <p>
        We know that everyone is busy nowadays and you hardly have time to take care of your vehicle and take it to the
        garage for servicing. To make your life easy, we are offering the collection and delivery service free of cost.
        If you have pre-booked our service, and your car is drivable, our team will collect your vehicle from a place of
        your choice and then deliver it back to you after all the repairs are done.
      </p>
      <p>
        Many Autos operate a fleet of pool cars with a dedicated driver, so wherever we are collecting from, we need to
        be able to leave one of our pool vehicles either in your work parking space or if in a residential area, we
        would need to be able to leave our car either at your house or on the road with a permit if required. We would
        be grateful if you could bear this in mind when booking to use our free Collection and delivery service.
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
        title: "What is the minimum thickness for brake discs?",
        content:
          "The minimum thickness for brake discs is 3mm. If it gets below 3mm, it would be dangerous for you to drive the car as it can damage the rest of the components of the vehicle. Having below minimum thickness can even cause you to fail the MOT.",
      },
      {
        title: "How long do brake discs last?",
        content:
          "The brake discs normally last up to 80,000 and 120,000 miles. The condition of the discs depends on the way of driving. You can increase the lifespan of your brake discs by driving carefully and applying the brakes slowly. Sharp turns and rash driving can damage the vehicle’s parts.",
      },
      {
        title: "What is the cost to replace brake pads and discs?",
        content:
          "The average cost of front brake disc and pad replacement is £224. The price can range between £140 to £400. The cost of the back brake disc and pads replacement is £249. It can also range from £140 to £400. The price varies according to the make and model of your vehicle.",
      },
    ],
    listMenu: carRepairPages,
  }),

  mounted() {
    if (this.$device.ismobile) return (this.panel = null);
  },

  head: {
    title: "Brake Disc Replacement| Brake Disc and Pads Replacement",

    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "If you need brake disc replacement, you can find them at ManyAutos. We carry a huge range of discs and pads for all vehicles.",
      },
      {
        name: "keywords",
        content:
          "Replace brake discs, replace brake pads and discs, brake disc replacement.",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Brake Disc Replacement| Brake Disc and Pads Replacement",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: process.env.APP_URL + '/brake-disc',
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/brakedisc1.jpg",
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
          "If you need brake disc replacement, you can find them at ManyAutos. We carry a huge range of discs and pads for all vehicles.",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Brake Disc Replacement| Brake Disc and Pads Replacement",
      },
      {
        name: "twitter:description",
        content:
          "If you need brake disc replacement, you can find them at ManyAutos. We carry a huge range of discs and pads for all vehicles.",
      },
      {
        name: "twitter:image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/brakedisc1.jpg",
      },
      {
        itemprop: "image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/brakedisc1.jpg",
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