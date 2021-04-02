<template>
  <page-layout-v2
    title="Car Service Near You | Book Your Car Service Online"
    subHeading="Book your car service on economical prices now"
    heading-bg="customer-v2/static-pages/service.jpg"
    heading-img='https://static.manyautosltd.com/uploads/car-service-page-part-image.png'
    box-title='Book your car service now'
    :faqs='faqs'
    faq-topic='How Car Servicing With ManyAutos Works'
    blog-topic='More about Car Servicing With ManyAutos'
    :listMenu='listMenu'
    redirect-to='/booking/create/mot-and-servicing#INTERIM_SERVICE'
    :has-service-pages='false'
  >
    <template #overview>
      <p>
        Looking to get your car serviced? Look no further. Many Autos offers all of the car services that you need. 
        We offer free collection and delivery of the vehicle for a hassle free experience. 
        A regular service is recommended by all manufacturers to make sure that your car is kept in good condition.
      </p>
      <p>
        Many Autos recommends a Full service every 12 months or 10,000 miles and an interim service 
        every 6 months or 5000 miles.
      </p>
      <p class="">
        The service that we offer comes hand in hand with the type of
        service you want to carry out for your car. If you look at
        <strong>car services in UK</strong>, not all garages offer or have
        trained technicians to complete additional
        <NuxtLink to="/oil-change">car services and repair</NuxtLink> that
        are required or recommended from the 50- or 70-point checks
        completed. We at Many Autos offer
        <strong>premier car services</strong> to all our customers.
      </p>
    </template>
    <template #blog>
      <p>
        There are two different types of services available, which one you chose depends on the vehicle mileage 
        and age since last service. The majority of car owners service their vehicles to the main 
        manufacturer recommended schedule as recommended by us. Most modern vehicles will also tell you 
        that a service is due. To be able to reset this warning, either an Interim or Full Service is required, 
        depending on the needs of the vehicle. If you are looking for an
        <strong>affordable car repair garage</strong>, then you have come to the right place.
      </p>
      <h2 class="font-weight-600">
        What is an interim service?
      </h2>
      <p>
        An Interim Service is carried out in between the annually recommended full service. 
        The interim service focuses on making sure that the main items are in good condition 
        on your vehicle as well as replacing the oil and oil filter to prevent any problems in the future.
      </p>
      <h2 class="font-weight-600">
        What is a Full service?
      </h2>
      <p>
        The full service is the recommended annual service carried out as per main manufacturer recommendations. 
        The service changes the oil, oil filter and air filter on your vehicle. 
        We also check and top up all under-bonnet fluids. The vehicle is raised on the ramp and an inspection 
        of the vehicle is carried out as per our service schedule. Any items found that need your attention are 
        highlighted so you are fully aware of the condition of your vehicle. 
      </p>
      <h2 class="font-weight-600">
        Which car service is best for me?
      </h2>
      <p>
        If you are doing less than 2000 miles per year, then you can probably skip the interim service and stick 
        with the annual full service. If you are doing more, then it is best to stick to the recommended schedule 
        for servicing for your vehicle. 
      </p>
      <h2 class="font-weight-600">
        What is included in a car service?
      </h2>
      <p>
        A car service with Many Autos includes having the vehicle raised on a ramp, Oil and oil filter being replaced and multi-point checks carried out on the vehicle. 
        <br><br>With an Interim service we will replace the oil and oil filter, check the engine for any high risk items and check all your under-bonnet fluids.
        <br><br>With a Full Service we will also replace the air-filter and carry out all vehicle checks as per our service schedule.
      </p>
      <h2 class="font-weight-600">
        Why does the oil and oil filter need changing?
      </h2>
      <p>
        The oil and oil filter on vehicles needs regular maintenance as the engine depends on free flowing oil to 
        be able to run smoothly. If the Oil is dirty or low, you run the risk of serious damage to the engine.
      </p>
      <h2 class="font-weight-600">
        Why Does the Air filter need changing?
      </h2>
      <p>
        The air filters job is to stop dirt and debris from getting in to the engine. If the filter gets 
        too dirty and clogged, 
        it will mean less air getting in to the engine and reduced performance.
      </p>
      <h2 class="font-weight-600">
        When do I need to replace my brake fluid?
      </h2>
      <p>
        The most common recommendation is 24 months or 24,000 miles. 
        We will check as part of our routine service 
        and let you know if we feel your vehicle needs a brake fluid change.
      </p>
      <h2 class="font-weight-600">
        Why does my Coolant need a flush and refill?
      </h2>
      <p>
        A coolant Flush and refill protects 
        your engine from any rust and other deposits that may have built up in the coolant system over time.
      </p>
      <h2 class="font-weight-600">
        When should I replace my cabin filter?
      </h2>
      <p>
        We recommend that the cabin filter is replaced at least once a year. 
        The cabin filter keeps the air you breath inside the vehicle clean from external pollutants and pollen.
      </p>
      <h2 class="font-weight-600">
        Optional Extras
      </h2>
      <p>
        During the process of a service you can choose to have some optional extras carried out as routine maintenance. 
        We may even recommend some of these items if we feel they would be beneficial for you. 
        Optional Extras
        <br>
        <ul>
          <li>Brake Fluid Service</li>
          <li>Coolant Flush and Refill</li>
          <li>Cabin Filter</li>
          <li>Air-con Regass</li>
        </ul>
      </p>
      <h2 class="font-weight-600">
        How often should I service my car?
      </h2>
      <p>
        The most recommended option is to have your car serviced at regular intervals. 
        Every 6 months or 6,000 miles for an Interim service and 12 months or 12,000 miles for a full service.
        Whichever comes first.
      </p>
    </template>

    <div style='padding-top: 50px;'>
      <car-service-table></car-service-table>
    </div>
  </page-layout-v2>
</template>

<script>
import PageLayoutV2 from "@/layouts/page-layout-v2";
import { carServicePages } from '~/utils/vars';
import CarServiceTable from '~/components/func-components/car-service-table.vue';

const URL = process.env.APP_URL;

export default {
  components: {
    PageLayoutV2,
    CarServiceTable,
  },

  data: () => ({
    panel: 0,
    faqs: [
      {
        title: "What is a car service?",
        content:
          "A service replaces some essential items on your vehicle and includes multiple point checklist to ensure your vehicle is kept in a good condition and is safe to drive",
      },
      {
        title: "How much does it cost for my car service?",
        content:
          "Save up to 30% on your car service. Enter your reg in the box opposite and get an exact price for your vehicle. No estimates, just clear upfront prices.",
      },
      {
        title: "Why do I need to Service my car?",
        content:
          "A vehicle service is just as benificial for you as the driver as it is for the vehicle. You will get peace of mind that there are no imminent problems with the vehicle and if you have a warranty it is quite likely that regular vehicle maintenance is in the fine print for them to cover any work that may be needed in the future.",
      },
    ],
    listMenu: carServicePages,
  }),

  mounted() {
    if (this.$device.ismobile) return (this.panel = null);
  },

  head: {
    title: "Car Service Near You | Book Your Car Service Online",

    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Save your time and money, Many Autos is your all in one car solution. We will provide you best deal for Car service. You can select recommended package (full Service, interim Service, MOT) or select from additional service you required from our provided list just visit our website Book your car service online or get free quote from Many Autos LTD best car repair and car services in United Kingdom.",
      },
      {
        name: "keywords",
        content:
          "Car service, full services  in United Kingdom, Car interim service, Car major service deal in United Kingdom, Car servicing in United Kingdom",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Car Service Near You | Book Your Car Service Online",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: process.env.APP_URL + '/car-service',
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/service.jpg",
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
          "Save your time and money, Many Autos is your all in one car solution. We will provide you best deal for Car service. You can select recommended package (major Service,  full Service, car  interim Service, MOT) or select from additional service you required from our provided list just visit our website Book your car service online or get free quote from Many Autos LTD best car repair and car services in United Kingdom.",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Car Service Near You | Book Your Car Service Online",
      },
      {
        name: "twitter:description",
        content:
          "Save your time and money, Many Autos is your all in one car solution. We will provide you best deal for Car service. You can select recommended package (major Service,  full Service, car  interim Service, MOT) or select from additional service you required from our provided list just visit our website Book your car service online or get free quote from Many Autos LTD best car repair and car services in United Kingdom.",
      },
      {
        name: "twitter:image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/service.jpg",
      },
      {
        itemprop: "image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/service.jpg",
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