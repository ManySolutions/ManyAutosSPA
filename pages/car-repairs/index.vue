<template>
  <page-layout-v2
    title="Car Repair Near You | Book Your Car Repair Online"
    sub-heading="Book your car repair online on economical prices now"
    heading-bg-static="https://static.manyautosltd.com/uploads/car-mechanic-installing-sensor-during-suspension-adjustment.jpg"
    heading-img='https://static.manyautosltd.com/uploads/car-service-page-part-image.png'
    box-title='Book your car repair now'
    :faqs='faqs'
    faq-topic='Free collection and delivery with ManyAutos'
    blog-topic='More about car repairs with ManyAutos'
    :list-menu='listMenu'
    redirect-to='/booking/create/parts'
    :has-repair-pages='false'
  >
    <template #overview>
      <p>
        Manyautos provides the best car repairs and replacements. 
        We will fully inspect your vehicle and let you know what repairs are required. 
        All the repairs and maintenance is offered at competitive prices. We don’t compromise on 
        the quality of work and the safety of our customers. Only authentic equipment and parts 
        are used for the repairs. Our fully qualified mechanics are ready and waiting to 
        help you with the services.
      </p>
    </template>
    <template #blog>
      <p>
        Many Autos offers a hassle free collection and delivery service for all work as long as the car is drivable and
        safe. We carry out almost all repair work that you could need. Our mechanics are trained and qualified and fully
        backed up by a 12 month parts and labour warranty on all work done.
      </p>
      <h2 class="font-weight-600">
        Many Autos: Your trusted car repair service.
      </h2>
      <p>
        One of the most popular terms searched on google is “<strong>car repair garages near me</strong>” and “<strong>mechanic near me</strong>”. This may seem like a quick way to find someone to repair your car, however the process can be tiresome. If you want to find a garage that will look after your car and not charge you excessive prices you will need to spend some time searching the history of that garage. You will check their reviews, then get some quotes from them, then check the prices. You can save yourself all this hassle by using Many Autos, who check and authorise all our garages. We also offer the unique service of providing all our prices up front, so no one can try and pressure sell you services at overly inflated prices.       
      </p>
      <h2 class="font-weight-600">
        Car repair near me
      </h2>
      <p>
        Looking for car repairs near you? Look no further. Many Autos has locations across the UK. With all our locations checked and monitored for consistency, quality and customer care you can rest assured you will receive the same great service wherever you are in the UK.
      </p>
      <h2 class="font-weight-600">
        How much should a car repair cost?
      </h2>
      <p>
        Many Autos is taking the guess work out of car repairs. You are no longer bogged down with estimates from different garages which fluctuate when you get your car repaired. Many Autos has a clear pricing structure tailored to your exact vehicle, so the prices are final. Any additional work required is always sent to you to be authorised, so no work will be done until you have specifically understood and approved it. 
      </p>
      <h2 class="font-weight-600">
        How can I get a car repair quote?
      </h2>
      <h2 class="font-weight-600">
        Will there be any surprise charges?
      </h2>
      <p>
        No. The final price you see is the final price for the quoted work. If any further work is identified you will
        be notified of each item of work, how serious or dangerous the work is and the cost. The final decision to carry
        out any extra work is always with you.
      </p>
      <p>
        Simply enter your registration number on our website, select the services you require and proceed with your booking. As simple as that. With all the pricings up front you have nothing to worry about. Payment will be taken when all the work has been completed and the car is ready to be sent back to you.
      </p>
      <h2 class="font-weight-600">
        What time do I have to drop off my car?
      </h2>
      <p>
        You do not. With Many Autos all services, including MOT’s, include free collection and delivery. Vehicles are collected before 11am unless specifically agreed with you for another time. 99% of all work is done same day. The chances are you will have the car back with you by the end of the working day, if not before.
      </p>
      <h2 class="font-weight-600">
        How long will you keep my car?
      </h2>
      <p>
          We are able to carry out 90% of all work same day. This includes MOT failures and repair work. You will be
          told if your car needs longer than a day for any extensive work such as a Head Gasket replacement.
      </p>
      <h2 class="font-weight-600">
        If I am not there, how will I know you actually did the work?
      </h2>
      <p>
        All work is provided with clear invoicing and services come with a service schedule so you have written
        confirmation of all work carried out. Should you require you can also request to have the old parts returned
        with the vehicle once the work is complete.
      </p>
      <h2 class="font-weight-600">
        What happens if the work I booked is not needed?
      </h2>
      <p>
        Our mechanics will always do a brief check where possible to make sure that the repair work that you have booked
        is actually necessary. If not we will contact you to confirm if you would like us to proceed, diagnose a fault
        or just return the vehicle.
      </p>
      <h2 class="font-weight-600">
        When will you take payment? 
      </h2>
      <p>
        We will only take payment once the repair work has been completed and the all checks have been carried out. Once
        we are satisfied that the repair work is complete we will send you a request for payment. Payment will be made
        online via Credit or Debit card.
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
        title: "Do you offer a warranty?",
        content:
          "Yes, all repair work carried out with Many Autos is covered by a 12 months parts and labour warranty for worry free repairs.",
      },
      {
        title: "Can you diagnose a problem with my car?",
        content:
          "We offer different diagnostic assessments for your vehicle. Select the one that is the most appropriate or drop us a call, message on live chat or email and we will answer any questions and help you decide.",
      },
      {
        title: "How will I know you are charging me a fair price?",
        content:
          "We try to be clear and upfront with all our pricing. Just enter your reg number and see what your total repair cost will be. There are no hidden charges or fees.",
      },
    ],
    listMenu: carRepairPages,
  }),

  mounted() {
    if (this.$device.ismobile) return (this.panel = null);
  },

  head: {
    title: "Car Repair Near You | Compare Prices",

    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Find Car Repairs Near You from Approved Garages. We have plenty of local garages near you, to choose from. Find an expert local garage for your repairs at the best price.",
      },
      {
        name: "keywords",
        content:
          "Car service, full services  in United Kingdom, Car interim service, Car major service deal in United Kingdom, Car servicing in United Kingdom",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Car Repair Near You | Compare Prices",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: process.env.APP_URL + '/car-repairs',
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://static.manyautosltd.com/uploads/car-mechanic-installing-sensor-during-suspension-adjustment.jpg",
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
          "Find Car Repairs Near You from Approved Garages. We have plenty of local garages near you, to choose from. Find an expert local garage for your repairs at the best price.",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Car Repair Near You | Compare Prices",
      },
      {
        name: "twitter:description",
        content:
          "Find Car Repairs Near You from Approved Garages. We have plenty of local garages near you, to choose from. Find an expert local garage for your repairs at the best price.",
      },
      {
        name: "twitter:image",
        content: "https://static.manyautosltd.com/uploads/car-mechanic-installing-sensor-during-suspension-adjustment.jpg",
      },
      {
        itemprop: "image",
        content: "https://static.manyautosltd.com/uploads/car-mechanic-installing-sensor-during-suspension-adjustment.jpg",
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