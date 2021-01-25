<template>
  <page-layout
    title="Vehicle Parts That Require Maintenance Over Time to Run Smoothly"
    headingBgStatic="https://static.manyautosltd.com/uploads/vehicle-parts-that-require-maintenance-over-time-to-run-smoothly1.jpg"
    has-share-button
  >
    <div class="container" style="padding-top: 70px">
      <p>
        Each part of our car needs maintenance from time to time. Some parts have a shorter lifespan than the rest of
        the parts. They should be repaired and also replaced if necessary. If not replaced, they can affect the
        performance of the other car parts.
      </p>
      <h2>Here are some parts that require maintenance more frequently than the rest</h2>
      <h3>Oil and oil filter change </h3>
      <p class="margin-bottom-10 text-justify text-teal">
        The thing that requires maintenance the most frequent is the engine oil and the oil filter. The oil filter is
        used to stop keep the engine clean from any type of dust or dirt. With time the dust starts clogging the filter
        and the particles get mixed in the engine oil. That is when the replacement is necessary. You should visit us
        and get your oil changed before it starts affecting the performance of your vehicle. You can get your oil filter
        replaced every time you come for an oil change. We recommend you to change the oil of your car every 3000
        miles.
      </p>
      <h3>Servicing of the air conditioner</h3>
      <p class="margin-bottom-10 text-justify text-teal">
        The air conditioner can live up to a year. You don’t have to change it every time but it would need servicing.
        All the dust and the particles get stuck in the air conditioner that can be removed by servicing. It is easy to
        identify a faulty air conditioner. You know that it is not working properly when the air coming out of it is not
        cold. We can inspect your ac and tell you if it just needs servicing or if the problem is severe and you need to
        replace it.
      </p>
      <h3>Thermostat housing</h3>
      <p class="margin-bottom-10 text-justify text-teal">
        <NuxtLink to="/clutch-replacement">The thermostat housing</NuxtLink> is responsible for the flow of fluid in your engine. Without the right amount of
        lubricant, the engine cannot work properly. It should be in a good condition and the fluid level should be
        right.
      </p>
      <p class="margin-bottom-10 text-justify text-teal">
        We provide an affordable <NuxtLink to="/vehicle-engine-diagnostic-services">car thermostat replacement cost in the UK</NuxtLink>. You can get your car inspected and get
        authentic parts for your vehicle at a reasonable price.
      </p>
      <h3>Battery charge</h3>
      <p class="margin-bottom-10 text-justify text-teal">
        A car cannot start without a battery. Without a properly working battery, your car will keep sitting in your
        garage. You need to take extra care of your battery so it wouldn’t fail in the middle of anywhere and leave you
        stranded. We recommend charging the battery of the car every 4 years,it doesn’t matter how many miles it has
        been driven. If you live in a hot tropical climate, then you need to change your car’s battery every 3 years.
      </p>
      <h3>Life of the brake pads</h3>
      <p class="margin-bottom-10 text-justify text-teal">
       Brake pads play a role in stopping your car when you press the brakes. We recommend changing them every 3 years,
       although the replacement can depend on the size of the vehicle. Brake pads used in heavier vehicles wear out
       sooner than smaller vehicles. If the brakes are not changed when needed, they can cause a safety hazard. The
       repair cost depends on the amount of damage that has been done. The severe the damage, the higher the bill. 
      </p>
      <h3>The whole braking system</h3>
      <p class="margin-bottom-10 text-justify text-teal">
       You need a perfect braking system for a safe drive. Faulty brakes can cause threatening accidents. You should
       keep a look at all the parts of the braking system and get them replaced whenever they need it. Some of its parts
       wear out sooner than the others. Parts like the brake pads,<NuxtLink to="/water-pump-replacement">abs pump</NuxtLink>,brake fluid, and the brake discs should be
       given extra attention, as your safety depends on them.                                                                            
      </p>
      <p class="margin-bottom-10 text-justify text-teal">
        You can visit our website if you need any kind of services and are looking for <NuxtLink to="/car-service">car garages in Reading</NuxtLink>.
        We will be at your service.
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
          "https://manyautosltd.com/blogs/vehicle-parts-that-require-maintenance-over-time-to-run-smoothly",
      },
    };
  },

  head: {
    title: "Vehicle Parts That Require Maintenance Over Time to Run Smoothly",

    meta: [
      {
        hid: 'description',
        name: "description",
        content:
          "Car maintenance is necessary and it should be done sooner than later. Many parts of the car cannot survive for a longer period without service. Read to know more.",
      },
      {
        name: 'keywords',
        content:
          "thermostat housing, abs pump, car garages reading, car thermostat replacement cost the UK",
      },
      {
        hid: 'og:title',
        property: "og:title",
        content: "Vehicle Parts That Require Maintenance Over Time to Run Smoothly",
      },
      {
        hid: 'og:type',
        property: "og:type",
        content: "website",
      },
      {
        hid: 'og:url',
        property: "og:url",
        content:'https://manyautosltd.com/blogs/vehicle-parts-that-require-maintenance-over-time-to-run-smoothly',
      },
      {
        hid: 'og:image',
        property: "og:image",
        content: "https://static.manyautosltd.com/uploads/vehicle-parts-that-require-maintenance-over-time-to-run-smoothly1.jpg",
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
          "Car maintenance is necessary and it should be done sooner than later. Many parts of the car cannot survive for a longer period without service. Read to know more.",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Vehicle Parts That Require Maintenance Over Time to Run Smoothly",
      },
      {
        name: "twitter:description",
        content:
          "Car maintenance is necessary and it should be done sooner than later. Many parts of the car cannot survive for a longer period without service. Read to know more.",
      },
      {
        name: "twitter:image",
        content: "https://static.manyautosltd.com/uploads/vehicle-parts-that-require-maintenance-over-time-to-run-smoothly1.jpg",
      },
      {
        itemprop: "image",
        content: "https://static.manyautosltd.com/uploads/vehicle-parts-that-require-maintenance-over-time-to-run-smoothly1.jpg",
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