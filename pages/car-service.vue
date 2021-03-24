<template>
  <page-layout-v2
    title="Car Service Near Me"
    subHeading="Book your car service on 30% off now"
    heading-bg="customer-v2/static-pages/service.jpg"
    heading-img='https://static.manyautosltd.com/uploads/car-service-page-part-image.png'
    box-title='Book your car service now'
    :faqs='faqs'
    topic='Car Service'
    :listMenu='listMenu'
    redirect-to='/booking/create/mot-and-servicing#INTERIM_SERVICE'
  >
    <template #overview>
      <p class="text-teal text-18 justify">
        The service that we offer comes hand in hand with the type of
        service you want to carry out for your car. If you look at
        <strong>car services in UK</strong>, not all garages offer or have
        trained technicians to complete additional
        <NuxtLink to="/oil-change">car services and repair</NuxtLink> that
        are required or recommended from the 50- or 70-point checks
        completed. We at Many Autos offer
        <strong>premier car services</strong> to all our customers.
      </p>
      <p class="text-teal text-18 justify">
        There are many factors we look for when trying to find the right
        car garage and mechanics with the most important one being
        trustworthy. When looking through search engines for
        <strong>online garage services in UK</strong>, you will notice
        that we are upfront and transparent with the costs of services
        requested by our customers. Our reviews confirm that our customers
        <strong>book online vehicle repair services</strong> with
        confidence.
      </p>
      <p class="text-teal text-18 justify">
        At Many Autos we cater for all models within the Car range. If you
        do not see your vehicle in the list below, please call us and we
        will give you a quote for your car service accordingly.
      </p>
    </template>
    <template #blog>
      <p class="text-teal text-18 justify mb-15">
        The type of service you choose for your car is dependent on
        various factors. For example, the condition of your car, the
        number of miles you drive or have been currently driven and the
        last time your car was serviced. We offer two types of service for
        your car, a <strong>Full Service</strong> also known as major
        service, which includes a comprehensive 70 points check. and
        an <strong>Interim Service</strong> also known as minor
        service which includes 50 points check. If you are looking for an
        <strong>affordable car repair garage</strong>, then you have come
        to the right place.
      </p>
      <h3
        class="font-weight-600"
      >
        Importance of vehicle repair servicing and finding the right car
        garage
      </h3>
      <p class="text-teal text-18 justify">
        The service that we offer comes hand in hand with the type of
        service you want to carry out for your car. If you look at
        <strong>car services in UK</strong>, not all garages offer or have
        trained technicians to complete additional
        <NuxtLink to="/oil-change">car services and repair</NuxtLink> that
        are required or recommended from the 50- or 70-point checks
        completed. We at Many Autos offer
        <strong>premier car services</strong> to all our customers.
      </p>
      <p class="text-teal text-18 justify">
        There are many factors we look for when trying to find the right
        car garage and mechanics with the most important one being
        trustworthy. When looking through search engines for
        <strong>online garage services in UK</strong>, you will notice
        that we are upfront and transparent with the costs of services
        requested by our customers. Our reviews confirm that our customers
        <strong>book online vehicle repair services</strong> with
        confidence.
      </p>
      <p class="text-teal text-18 justify">
        At Many Autos we cater for all models within the Car range. If you
        do not see your vehicle in the list below, please call us and we
        will give you a quote for your car service accordingly.
      </p>

      <v-expansion-panels>
        <v-expansion-panel class="icon">
          <v-expansion-panel-header class="card-header">
            Types of car services and what is included in more details
          </v-expansion-panel-header>
          <v-expansion-panel-content eager class="card-header-body">
            <strong>Full Service</strong> includes a comprehensive 70-point
            check, <strong>Interim Service</strong> has a 50-point check. At
            Many Autos we use the latest equipment, allowing our
            <strong>qualified technicians</strong> and
            <strong>car mechanics</strong> to complete a
            <NuxtLink to="/vehicle-engine-diagnostic-services"
              >full car diagnostic</NuxtLink
            >
            and resolve any problems quickly and efficiently. Forgetting to
            service the vehicle as per manufacturer schedule can cause
            airborne debris such as leaves and dust to find their way into
            the engine, in particular the cylinders. This grime can then mix
            with the <strong>engine oil</strong>, which, when moves around
            the engine can slowly wear away engine components due to its
            abrasive nature. If left for a while clogged filters can cause
            serious damage to engine, reducing its performance and costing
            you more money than the cost of a normal service. At Many Autos
            we keep a range of different service parts in stock for every
            make and model, so you can get the service you need to keep the
            vehicle engine running at the highest possible standard.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="card-header">
            Importance of Air Filters and why you should replace them
          </v-expansion-panel-header>
          <v-expansion-panel-content eager class="card-header-body">
            Air filters prevent dirt and other materials from getting into
            vehicle engines and should be changed as per service schedule to
            ensure trouble-free engine function.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="card-header">
            The role of a Fuel Filter
          </v-expansion-panel-header>
          <v-expansion-panel-content eager class="card-header-body">
            The purpose of fuel filters is to prevent debris from getting
            into vehicle engine and contaminating fuel supply.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="card-header">
            Significance of an Oil Filter is to keep your engine oil clean
          </v-expansion-panel-header>
          <v-expansion-panel-content eager class="card-header-body">
            An oil filter is a vital component, and it is designed to
            protect the engine from dangerous contaminants.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="card-header">
            Pollen Filter also known as Cabin Filter
          </v-expansion-panel-header>
          <v-expansion-panel-content eager class="card-header-body">
            <p class="text-teal text-18 justify">
              The pollen filter filters out more than just pollen it stops
              all kinds of debris, pollution, and odours from entering the
              cabin and clogging up the heating, ventilation, and
              air-conditioning systems.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="card-header">
            Why it is vital to have good grade Engine Oil
          </v-expansion-panel-header>
          <v-expansion-panel-content eager class="card-header-body">
            <p class="text-teal text-18 justify">
              The grade and type of engine oil used can also impact the
              car's economy and emissions, so it is essential to use the
              correct grade engine oil. Unlike blood, engine oils do not
              self-cleanse and after a short amount of time will start to
              degrade and become progressively dirtier and less efficient.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <h3
              class="h2-service-heading text-blue"
              style="font-size: 1.75rem"
            >
              6 Months
            </h3>
            <p>
              Change oil and oil filter special oils at extra charge Top up
              bonnet fluid levels. Check brakes. Check steering. Check
              suspension. Check tyres. Check pollen filter. Collection and
              delivery.
            </p>
          </div>
          <div class="col-12 col-md-6">
            <h3
              class="h2-service-heading text-blue"
              style="font-size: 1.75rem"
            >
              12 Months
            </h3>
            <p>
              Change oil and oil filter special oils if required Top up
              bonnet fluid levels. Check brakes remove wheels. Check brake
              fluid. Check steering. Check suspension. Check tyres. Check
              pollen filter. Change air filter. Replace spark plugs if
              applicable (at extra cost). Collection and delivery.
            </p>
          </div>
        </div>
      </div>
      <div class="col-12">
        <h2 class="h3-service-heading text-blue pt-3">
          See what's included in each service
        </h2>
      </div>
      <div class="col-12 pb-3">
        <span>
          <span class="h3-service-heading">Interim Service Includes</span>
          <span class="h3-service-heading text-blue"
            >(50 Points Check)</span
          >
          <span class="h3-service-heading">Full Service Includes</span>
          <span class="h3-service-heading text-blue"
            >(70 Points Check)</span
          >
        </span>
      </div>

      <div class="col-12">
        <h2 class="h2-service-heading pt-3 pb-3">
          Common Car Problems found during a full service
        </h2>
      </div>
      <v-expansion-panels popout>
        <v-expansion-panel class="icon">
          <v-expansion-panel-header class="card-header">
            Car Oil Leaks or Burning Oil Smell
          </v-expansion-panel-header>
          <v-expansion-panel-content eager class="card-header-body">
            It is known that Car engines commonly leak form the valve covers
            or tensioner gasket seals. This can be a highly hazardous as
            there is a risk of leaking oil hitting the exhaust which will in
            turn cause the oil to burn. Engine oil also destroys wiring if
            it comes into contact which is why you may face electrical
            faults as a result of leaking oil in your Car. If your engine
            oil is leaking in your Car, a mechanic will be sure to find it
            during a full service as there are a number of tell-tale signs.
            It would be hard not to miss as the liquid would be likely to be
            dripping form the undercarriage of the car.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="card-header">
            Clunking or Clicking when Turning your Car
          </v-expansion-panel-header>
          <v-expansion-panel-content eager class="card-header-body">
            If the axle joint on an Car dries out, you are likely to hear a
            clunking or clicking sound when making sharp turns. This happens
            when the CV boot has been torn and grease has been split into
            the interior engine. The axle joint needs grease to operate
            properly and so when there isn’t any available, you’re going to
            face problems. During an Car full service, a mechanic will be
            likely to check on the health of the CV boot and axle joint if
            you have been hearing strange noises coming from your car.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="card-header">
            Car Exhaust Leak – Unhealthy Sound
          </v-expansion-panel-header>
          <v-expansion-panel-content eager class="card-header-body">
            Many Car models have a flexible joint in the exhaust between the
            down-pipe and the catalytic converters. This joint is prone to
            weathering and often begins to leak. While the deeper exhaust
            note can sound cool for a while, the results can be very
            expensive. There are a range of other Car specific problems
            which may be picked up during a full service, here are just a
            few more of the other common issues.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
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
        title: "What is a car service?",
        content:
          "Usually, we recommend giving your car a full service every year or every 12,000 miles, whichever happens first.",
      },
      {
        title: "How much does it cost for my car service?",
        content:
          "Save up to 30% on your car service. See our table above to browse our honest, upfront prices.",
      },
      {
        title: "What happens when we service your car?",
        content:
          "We service all makes and models of cars and vans up to 3,000kg, and we can save you time and money – typically more than an hour, and a bill that’s 65% cheaper than elsewhere to be precise!",
      },
    ],
    listMenu: [
      { title: "Audi Car Service", url: "/" },
      { title: "BMW Car Service", url: "/" },
      { title: "Citreon Car Service", url: "/" },
      { title: "Daewoo Car Service", url: "/" },
      { title: "Fiat Car Service", url: "/" },
      { title: "Ford Car Service", url: "/" },
      { title: "Honda Car Service", url: "/" },
      { title: "Kia service", url: "/" },
      { title: "Lexus service", url: "/" },
      { title: "Mazda service", url: "/" },
      { title: "Mercedes service", url: "/" },
      { title: "Mini service", url: "/" },
      { title: "Renault service", url: "/" },
      { title: "Saab Service", url: "/" },
      { title: "Seat Service", url: "/" },
      { title: "Toyota Service", url: "/" },
      { title: "Vauxhall Service", url: "/" },
      { title: "Volvo Service", url: "/" },
      { title: "Peugeot service", url: "/" },
      { title: "Chevrolet Service", url: "/" },
    ],
  }),

  mounted() {
    if (this.$device.ismobile) return (this.panel = null);
  },

  head: {
    title: "Car Service near me",

    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Save your time and money, Many Autos is your all in one car solution. We will provide you best deal for Car service. You can select recommended package (major Service,  full Service, car  interim Service, MOT) or select from additional service you required from our provided list just visit our website Book your car service online or get free quote from Many Autos LTD best car repair and car services in United Kingdom.",
      },
      {
        name: "keywords",
        content:
          "Car service, full services  in United Kingdom, Car interim service, Car major service deal in United Kingdom, Car servicing in United Kingdom",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Car Service near me",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: URL,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "logo-default.png",
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
        content: "Car Service near me",
      },
      {
        name: "twitter:description",
        content:
          "Save your time and money, Many Autos is your all in one car solution. We will provide you best deal for Car service. You can select recommended package (major Service,  full Service, car  interim Service, MOT) or select from additional service you required from our provided list just visit our website Book your car service online or get free quote from Many Autos LTD best car repair and car services in United Kingdom.",
      },
      {
        name: "twitter:image",
        content: "logo-default.png",
      },
      {
        itemprop: "image",
        content: "logo-default.png",
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