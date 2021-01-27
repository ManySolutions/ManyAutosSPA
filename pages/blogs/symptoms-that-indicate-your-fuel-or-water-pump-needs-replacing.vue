<template>
  <page-layout
    title='Symptoms That Indicate your Fuel Pump Needs Replacement'
    heading-bg-static='https://static.manyautosltd.com/uploads/symptoms-that-indicate-your-fuel-or-water-pump-needs-replacing1.jpg'
    has-share-button
  >
  <div class="container" style="padding-top: 70px;">
      <p>Pumps can be a delicate part of the vehicle. Their maintenance is necessary for the car to run smoothly. You
        need to listen carefully for any weird sounds made by the engine because most of the time the sounds signal some
        faults in the parts of the vehicle. One of the most important components of a vehicle is the fuel pump.
      </p>
      <h2>Fuel pump</h2>
      <p class="margin-bottom-10 text-justify text-teal">The <nuxt-link to="/fuel-injector">fuel pump</nuxt-link> provides pressure which supplies the fuel to the
        engine. Engines require a consistent flow of fuel to work properly. The symptoms of a faulty fuel pump are the
        easiest to notice as compared to the other parts of the vehicle. Following are the warning signs that mean your
        fuel pump needs a replacement.</p>
      <h2>Here are some points that can help you to identify a faulty fuel pump</h2>
      <h3>How does your car start?</h3>
      <p class="margin-bottom-10 text-justify text-teal">If your vehicle is struggling to start or is not working at
        all, your car’s fuel pump may be damaged. We suggest you get your car checked, you can contact our garage to
        arrange a recovery service for you, as driving your car to the garage won’t be an option.
      </p>
      <h3>High-pitched whining</h3>
      <p class="margin-bottom-10 text-justify text-teal">If your vehicle is struggling to start or is not working at
        all, your car’s fuel pump may be damaged. We suggest you get your car checked, you can contact our garage for
        the doorstep car service as driving your car to a garage won’t be an option.
      </p>
      <h3>Engine stuttering</h3>
      <p class="margin-bottom-10 text-justify text-teal">A clear sign that your engine’s fuel pump isn’t working is the
        jolt and stuttering of the engine when you are driving steadily. It happens when the pump struggles to provide
        the right amount of fuel to the engine, making it difficult for the engine to keep a steady speed. It can be
        extremely dangerous because it affects the level of control you have over your vehicle. If a problem like this
        occurs, we recommend you to visit our garage and we will provide you with the best <nuxt-link to="/fuel-pump">fuel pump repair</nuxt-link>.
      </p>
      <h3>Loss of power when driving uphill</h3>
      <p class="margin-bottom-10 text-justify text-teal">Another indication of faulty fuel is that your car loses power
        when it is put under pressure. More fuel is required by the vehicle when it is going uphill or carrying a heavy
        load. If your car loses power in such a situation, then it is evident that the fuel pump needs replacement.
      </p>
      <p class="margin-bottom-10 text-justify text-teal">If you want to know more about your car and its parts, you can
        ask our mechanics and <nuxt-link to="/">trained technicians</nuxt-link>. They will help you and answer all your inquiries.</p>
      <h3>What is the next step?</h3>
      <p class="margin-bottom-10 text-justify text-teal">If you experience any of these things, you should consult a
        professional immediately. We provide the finest services for your vehicle. We will inspect your vehicle and
        repair your fuel pump at an affordable price. You don’t even have to visit our garage for the service. Just book
        a service online and we will collect your car at a pre-decided time.</p>
    </div>
  </page-layout>
</template>

<script>
import PageLayout from '@/layouts/page-layout';

const URL = process.env.APP_URL;

export default {
  components: {
    PageLayout
  },
     props: {
    hasQuoteButton: {
      default: false,
      type: Boolean,
    },
    title: String,
    cls: String,
  },

  head: {
    title: 'Symptoms That Indicate your Fuel Pump Needs Replacement',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'The fuel pump is a high-priority part of a vehicle. Is it important to know when your pump needs repair or replacement? Read to learn more about the matter.'
      },
      {
        name: 'keywords', 
        content: 'Fuel pump repair, trained technician, fuel pump'
      },
      {
        hid: 'og:title',
        property: "og:title", 
        content: "Symptoms That Indicate your Fuel Pump Needs Replacement"
      },
      {
        hid: 'og:type',
        property: "og:type", 
        content: "website"
      },
      {
        hid: 'og:url',
        property: "og:url", 
        content: 'https://manyautosltd.com/blogs/symptoms-that-indicate-your-fuel-or-water-pump-needs-replacing'
      },
      {
        hid: 'og:image',
        property: "og:image", 
        content: "https://static.manyautosltd.com/uploads/symptoms-that-indicate-your-fuel-or-water-pump-needs-replacing1.jpg"
      },
      {
        hid: 'og:site_map',
        property: "og:site_name", 
        content: "ManyAutos LTD"
      },
      {
        hid: 'og:description',  property: 'og:description', 
        content: "The fuel pump is a high-priority part of a vehicle. Is it important to know when your pump needs repair or replacement? Read to learn more about the matter."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Symptoms That Indicate your Fuel Pump Needs Replacement"
      },
      {
        name: "twitter:description", 
        content: "The fuel pump is a high-priority part of a vehicle. Is it important to know when your pump needs repair or replacement? Read to learn more about the matter."
      },
      {
        name: "twitter:image", 
        content: "https://static.manyautosltd.com/uploads/symptoms-that-indicate-your-fuel-or-water-pump-needs-replacing1.jpg"
      },
      {
        itemprop: "image", 
        content: "https://static.manyautosltd.com/uploads/symptoms-that-indicate-your-fuel-or-water-pump-needs-replacing1.jpg"
      },
      {
        hid: 'og:type',
        property: "og:type", 
        content: "business.business"
      },
    ]
  }
}
</script>

<style lang="scss" scoped>
h2{
    color: #00b4d8;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 5px;
}
h3{

    color: #00b4d8;
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 5px;

}
</style>