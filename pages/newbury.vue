<template>
  <page-layout-v2
    title="Get your car serviced in Newbury"
    heading-bg='customer-v2/static-pages/allpics/newbury1.jpg'
    box-title='Book your service now'
    blog-topic='ManyAutos and Newbury'
    redirect-to='/booking/create/services'
  >
  <template #overview>
  <p>
    Newbury is a market town in the county of Berkshire, England. It is home to the administrative 
    headquarters of West Berkshire Council. It is well-known for its racecourse and also as the 
    headquarter for Vodafone UK. Newbury is a splendid place for families. There are good schools,
    easy access to shopping, countryside and culture. All the villages surrounding Newbury are nice
    as well.
  </p>    
</template>
    <template #blog>
      <p>We cover the Newbury area for all car servicing, MOT and repair needs. Manyautos is one-stop shopping for all
        your automotive needs. we use the latest equipment, allowing our qualified technicians and mechanics to diagnose
        any problems quickly and efficiently.</p>
      <p>Forgetting to service the vehicle as per the manufacturer schedule can cause your car to get damaged and break
        down. So, that is why it is necessary to stick to the schedule. We are here to ease your troubles and to keep
        you on the road. Everyone can easily access our website a book car repair services in Newbury. At Many Autos
        we keep a range of different service parts in stock for every make and model, so you can get the service you
        need to keep the vehicle engine running at the highest possible standard.</p>
      <h2 class="font-weight-600">
        How much does Full Service cost in Newbury?
      </h2>
      <p>
        The average cost of full service in Newbury is £151. The price can range from £133 to £300, depending on the
        make and model of your vehicle.
      </p>
      <h2 class="font-weight-600">
        What do you think about when choosing a garage for your service?
      </h2>
      <p>
        Choosing a garage is a really big responsibility. You need to look at multiple aspects and select a garage that
        would be the best for your car. What is the most efficient way for you to choose a garage for regular
        maintenance? Do you look at the online reviews or ask for your friends and family’s advice? It’s not ideal to
        just pull up to some car repairing centre and hope that they would do the required work properly. Well, now you
        don’t have to endure this torture of selecting the perfect garage, because we have taken that responsibility
        upon ourselves. You just register on our site and book a service for your car, and leave the rest to us.
        Manyautos is only here to provide you with the best. We will scout for <strong>garages in Newbury</strong> and provide you
        with the best garage that meets your needs in every way possible.
      </p>
      <h2 class="font-weight-600">
        When should you get your car serviced?
      </h2>
      <p>
        It is perfectly normal to forget when an MOT is due or when exactly your car should undergo a full service. For
        the MOT, you can benefit from our “MOT check history service” and learn everything you need to know about the
        previous MOT and the date of the upcoming one.
      </p>
      <p>As for the service, you can check the owner’s manual, it would have every bit of information in it. It is
        extremely important to keep all the history and information of car servicing in the annual. It not only come in
        handy when you forget the service date but also when you sell your car. The manual makes things easy for the
        next buyer. The age, make, mileage and the average usage of the vehicle in a day plays an important role in the
        servicing. Generally, a car is recommended to undergo interim service every 6000 miles (6-months) and a full
        service every 12,000 miles (12-months).</p>
      <h2 class="font-weight-600">
        What car problems you need to look out for? 
      </h2>
      <p>
        Many issues can arise while driving, you might be dealing with a locked steering or a broken air suspension. The
        problems can occur due to several reasons; you must check the steering fluid for any leaks or you can look for a
        slipped steering pump belt. As you must know that your vehicle is a complete system, if one thing gets damaged,
        it affects the performance of other components as well. If you can’t identify the cause of the problem then
        benefit from our car diagnostic service and get your vehicle inspected thoroughly.
      </p>
      <h2 class="font-weight-600">
        What do you need from your garage? 
      </h2>
      <p>
        The most common answer to this question is: you need a garage that can repair or service your vehicle at a
        reassemble price. But there is more to it than you thought. You can’t just choose any garage in Newbury, it
        has to be a garage that calls for you. Leaving your car, your most valued possession with the garage requires
        trust. You need to make sure that the garage is reliable and will perform all the services honestly. Other
        aspects affect your decision as well, like the waiting area or the hospitality and professionalism of the staff
        present at the garage.
      </p>
      <h2 class="font-weight-600">
        Do you offer MOT tests in Newbury? 
      </h2>
      <p>Yes, we provide MOT for all the vehicles present in Newbury despite their make and model. An MOT is
        compulsory and cannot be ignored, so if you are in Newbury and require an MOT test, book online now!
      </p>
      <h2 class="font-weight-600">
        How do we do this? 
      </h2>
      <p>
        All our service, repair and diagnostic work are carried out to the highest of standards using only OE (original
        equipment) parts and engine oil. We maintain a strict standard of work that means we can carry out service and
        repair work even if your vehicle is within its manufacturer warranty. This saves you a trip to the manufacturer
        for the service and saves you a lot of money. Not only do we have highly skilled technicians in the workshop,
        but we also have all the latest servicing, wheel alignment, diagnostic and hybrid car servicing equipment. There
        are several car maintenances measures that you must do to keep your car at its best, it is important to bring
        your car to the nearest Many Autos Centre and have it checked.
      </p>
      <h2 class="font-weight-600">
        Do you offer free collection and delivery from Newbury?
      </h2>
      <p>
        Yes, we believe that we offer a valuable product with our Free Collection and Delivery <strong>car service in
        Newbury</strong>. If your vehicle is drivable, we can collect it either from your place of work or from your home
        address. If you are unsure about whether the address you are considering having your vehicle collected from is
        within our range, then please do contact us.
      </p>
      <p>Many Autos operate a fleet of pool cars with a dedicated driver, so wherever we are collecting from, we need to
        be able to leave one of our pool vehicles either in your work car parking space or if in a residential area, we
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
    listMenu: carRepairPages,
  }),

  mounted() {
    if (this.$device.ismobile) return (this.panel = null);
  },

  head: {
    title: "Car Repair in Newbury| Garage in Newbury",

    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Find the best garages in Newbury for car services. MOT, vehicle repairs and all kind of services are offered at Manyautos.",
      },
      {
        name: "keywords",
        content:
          "Newbury, Car repairs in Newbury, Garage in Newbury, Car Service in Newbury",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Car Repair in Newbury| Garage in Newbury",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: process.env.APP_URL + '/newbury',
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/newbury1.jpg",
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
          "Find the best garages in Newbury for car services. MOT, vehicle repairs and all kind of services are offered at Manyautos.",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Car Repair in Newbury| Garage in Newbury",
      },
      {
        name: "twitter:description",
        content:
          "Find the best garages in Newbury for car services. MOT, vehicle repairs and all kind of services are offered at Manyautos.",
      },
      {
        name: "twitter:image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/newbury1.jpg",
      },
      {
        itemprop: "image",
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/allpics/newbury1.jpg",
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