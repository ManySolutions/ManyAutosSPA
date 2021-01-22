<template>
  <page-layout
    title="How to Find Car Repair and Maintenance Services Online"
    headingBgStatic="https://static.manyautosltd.com/uploads/how-to-find-car-repair-and-maintenance-services-online1.jpg"
    has-share-button
  >
    <div class="container" style="padding-top: 70px">
      <p>
        Purchasing a car is somewhat easy as you are aware of the features you want within it. The difficult part is to
        maintain your car due to the standard running costs. Buying it is not an investment that you earn on resell
        after using it for a few months. You will always get a lower price than the original due to depreciation. The
        money spent on the repair and maintenance of a car is the key part to ensure that you do not loose out too in
        the coming future as a well-maintained car will always hold a better value when selling in the future.
      </p>
      <h2>Why maintenance is important</h2>
      <p class="margin-bottom-10 text-justify text-teal">
        When your car is not maintained regularly, this will cause daily running issues and can result in a higher price
        to repair. The only way to save some money is to pay attention to your <NuxtLink to="/car-service">car service</NuxtLink>. Maintaining a vehicle is a
        good investment for future as it is for your safety. A well-maintained vehicle can reduce the risk of any
        accidents caused by a failed part and provide you with a safe, smooth and risk-free drive. 
      </p>
      <h2>In need of online repair service</h2>
      <p class="margin-bottom-10 text-justify text-teal">
        It can happen anytime and worst while traveling that your car develops an issue and you do not find any <NuxtLink to="/oil-change">car inspection garages</NuxtLink> for repair and maintenance to diagnose and resolve
        the issue. To overcome this problem, you
        can book your car with a professional online vehicle repair and maintenance Company. You can call them or book
        online anytime from anywhere in the UK for repairing and maintenance work.
      </p>
      <h2>How you can find vehicle maintenance services online?</h2>
      <p class="margin-bottom-10 text-justify text-teal">
        Getting exceptional repair service via internet is simple and easy to find. To find a website online, you just
        need to type <NuxtLink to="/water-pump-replacement">car repair near me</NuxtLink> on a search engine and you will find a complete list of websites. You will have
        to choose a company with the best and honest services. Further, you can check if the company has any special
        offers on their website that might relate to the repair required by you.
      </p>
      <h2>The procedure for booking a service</h2>
      <p class="margin-bottom-10 text-justify text-teal">
        You would just have to select a company and get your vehicle registered in their system. You can choose from
        their large variety of services that are listed on the website. Book a service online and we would send one of
        our polite and professional driver for free pick up and also delivery of your car once work has been completed.
      </p>
      <p class="margin-bottom-10 text-justify text-teal">
        Many online companies offer a complete package in which you can get monthly <NuxtLink to="/">car repair and maintenance</NuxtLink>. It is
        important to diagnose problems in the vehicle before it breaks any of the internal parts of the engine. 
      </p>
      <p class="margin-bottom-10 text-justify text-teal">
       Regular diagnostics test and full health check will help the mechanics to diagnose an issue when it is merely
       starting. It prevents the issue from getting bigger and causing more issues that can becomes costly. You can
       search for <strong>cheap car services near you</strong>. Many garages offer discounts and give affordable prices for regular
       repair and replacements.
      </p>
      <p class="margin-bottom-10 text-justify text-teal">
        Many garages offer a free collection and delivery service. You can book a service online and leave the rest of
        the work to them. They collect your vehicle from a place of your choice and then deliver it back to you after it
        has been serviced and maintained.
      </p>
    </div>
  </page-layout>
</template>

<script>
import PageLayout from "@/layouts/page-layout";

const URL = process.env.APP_URL;

export default {
  components: {
    PageLayout,
  },
  props: {
    hasQuoteButton: {
      default: false,
      type: Boolean,
    },
    title: String,
    cls: String,
  },
  data() {
    return {
      user: {
        title:
          "https://manyautosltd.com/blogs/how-to-find-car-repair-and-maintenance-services-online",
      },
    };
  },

  head: {
    title: "How to Find Car Repair and Maintenance Services Online",

    meta: [
      {
        hid: 'description',
        name: "description",
        content:
          "Regular maintenance is necessary for your vehicle. If you are stranded on the road with a broken vehicle, you can contact companies and book online services.",
      },
      {
        name: 'keywords',
        content:
          "car repair and maintenance, car service, car repair near me, car inspection station, cheap automobile services near you",
      },
      {
        hid: 'og:title',
        property: "og:title",
        content: "How to Find Car Repair and Maintenance Services Online",
      },
      {
        hid: 'og:type',
        property: "og:type",
        content: "website",
      },
      {
        hid: 'og:url',
        property: "og:url",
        content:'https://manyautosltd.com/blogs/how-to-find-car-repair-and-maintenance-services-online',
      },
      {
        hid: 'og:image',
        property: "og:image",
        content: "https://static.manyautosltd.com/uploads/how-to-find-car-repair-and-maintenance-services-online1.jpg",
      },
      {
        hid: 'og:site_name',
        property: "og:site_name",
        content: "ManyAutos LTD",
      },
      {
        hid: 'og:description',
        property: "og:description",
        content:
          "Regular maintenance is necessary for your vehicle. If you are stranded on the road with a broken vehicle, you can contact companies and book online services.",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "How to Find Car Repair and Maintenance Services Online",
      },
      {
        name: "twitter:description",
        content:
          "Regular maintenance is necessary for your vehicle. If you are stranded on the road with a broken vehicle, you can contact companies and book online services.",
      },
      {
        name: "twitter:image",
        content: "https://static.manyautosltd.com/uploads/how-to-find-car-repair-and-maintenance-services-online1.jpg",
      },
      {
        itemprop: "image",
        content: "https://static.manyautosltd.com/uploads/how-to-find-car-repair-and-maintenance-services-online1.jpg",
      },
      {
        hid:'og:type',
        property: "og:type",
        content: "business.business",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
h2 {
  color: #00b4d8;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 5px;
}
h3 {
  color: #00b4d8;
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>