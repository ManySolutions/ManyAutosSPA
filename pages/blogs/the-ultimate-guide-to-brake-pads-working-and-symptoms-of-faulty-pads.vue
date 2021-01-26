<template>
  <page-layout
    title="The Ultimate Guide to Brake Pads: Working and Symptoms of Faulty Pads"
    headingBgStatic="https://static.manyautosltd.com/uploads/the-ultimate-guide-to-brake-pads-working-and-symptoms-of-faulty-pads.jpg"
    has-share-button
  >
    <div class="container" style="padding-top: 70px">
      <p>
        Brake pads are one of the most important safety features in all the cars and it is important to them and the
        role they play. They are fitted in the caliper sitting between the middle gap of the brake disc either on the
        front two wheels or mainly all four wheels.
      </p>
      <h2>Working of the braking system</h2>
      <p class="margin-bottom-10 text-justify text-teal">
       Most people don’t know how the braking system works in a car. Whenever you hit the brake pedal, the caliper
       pushes the brake pads against the rotating brake discs that are installed in the braking system of the vehicle.
       This in turn slows down the vehicle and brings it to a complete stop.
      </p>
      <p class="margin-bottom-10 text-justify text-teal">
        There are different <NuxtLink to="/brake-caliper">types of brake calipers</NuxtLink> available, you can choose according to your preference.
      </p>
      <h2>Why the brakes are replaced regularly?</h2>
      <p class="margin-bottom-10 text-justify text-teal">
        The lifespan of <NuxtLink to="/brake-pads">brake pads</NuxtLink> is dependent on how the car is driven and the quality of the brake pads as cheap pads
        tend to wear out faster. On motorways, less braking is required compared to urban areas as you have to stop for
        traffic, roundabouts, junctions, crossings, traffic lights, etc. Probably the most used system in a car is the
        braking system hence the brake parts are often replaced, like the <NuxtLink to="/brake-pipe">brake pipe replacement</NuxtLink>, fluid replacement,
        etc.
      </p>
      <h2>Things that indicate you have faulty brake pads</h2>
      <p class="margin-bottom-10 text-justify text-teal">
        You can often tell when your car requires new brake pads, here are some key points to look and listen out for:
      </p>
      <ul>
          <li>A squealing or scraping noise often means that something needs to be replaced. The squealing can be caused
            by worn out surfaces pushing or rubbing against the discs. The sounds that the car should not make include
            grinding, squealing, screeching, and clicking. Note that any sound made by the brakes indicates that a brake
            pad replacement is necessary.</li>
          <li>If your car does not stop correctly when you apply pressure on the brake pedal, then you need to contact a
            professional immediately. If it feels like the car is jumpy or vibrating whilst you are applying the brake
            pedal, then it could mean that the brake discs are warped due to heat buildup. The brake discs assist the
            car to brake correctly and smoothly. Check the pads regularly to make sure that they are not worn out. If it
            is thin, it can lead to a weaker system that will eventually not allow the brakes to work at all.</li>
          <li>If your car pulls to one side when you apply the brakes it could mean that one side has more worn than the
            other. The car will pull to one side without the movement of the steering wheel. This is risky as your car
            should not be making turns unless you are the one enforcing it.</li>
      </ul>
      <p class="margin-bottom-10 text-justify text-teal mt-6">
       The brake system is critical for your safety. You should always get your brakes checked whenever you take your
       car for a service. Any damage has to be fixed immediately, so any kind of accident can be avoided. We offer
       summer and winter diagnostic inspections and <NuxtLink to="/brake-disc">brake service</NuxtLink> to ensure your vehicle is always safe. 
      </p>
      <p class="margin-bottom-10 text-justify text-teal">
       We offer a free collection and delivery service to all of our customers making a booking. This can be from the
       comfort of your home or your workplace. A driver will arrive at your pre-booked collection time to avoid any
       inconvenience.
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
    title: "The Ultimate Guide to Brake Pads: Working and Symptoms of Faulty Pads",

    meta: [
      {
        hid: 'description',
        name: "description",
        content:
          "Brake pads are an essential part of the vehicle. They should be looked after for a smooth and steady drive. Read to learn more about the brake pads.",
      },
      {
        name: 'keywords',
        content:
          "Brake service, brake pads, brake pipe replacement, different types of brake calipers",
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
        content:'https://manyautosltd.com/blogs/the-ultimate-guide-to-brake-pads-working-and-symptoms-of-faulty-pads',
      },
      {
        hid: 'og:image',
        property: "og:image",
        content: "https://static.manyautosltd.com/uploads/the-ultimate-guide-to-brake-pads-working-and-symptoms-of-faulty-pads.jpg",
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
          "Brake pads are an essential part of the vehicle. They should be looked after for a smooth and steady drive. Read to learn more about the brake pads.",
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
          "Brake pads are an essential part of the vehicle. They should be looked after for a smooth and steady drive. Read to learn more about the brake pads.",
      },
      {
        name: "twitter:image",
        content: "https://static.manyautosltd.com/uploads/the-ultimate-guide-to-brake-pads-working-and-symptoms-of-faulty-pads.jpg",
      },
      {
        itemprop: "image",
        content: "https://static.manyautosltd.com/uploads/the-ultimate-guide-to-brake-pads-working-and-symptoms-of-faulty-pads.jpg",
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