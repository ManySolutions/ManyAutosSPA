<template>
  <page-layout
    title='About Us'
    headingBgStatic='https://static.manyautosltd.com/uploads/96.jpg'
  >
    <div class="container" style="padding-top: 70px;">
      <p><strong>Many Autos</strong> is a car repair and maintenance company which came into existence in 2001. We
        wanted to change the perspective of customers towards car maintenance.</p>
      <p>We have extremely skilled 50+ employees, who work in different departments of our company. Each department
        has its own experienced employees who work for the betterment of the company. </p>
      <h2>Our Story:</h2>
      <p class="margin-bottom-10 text-justify text-teal">We saw many people suffering from the lack of discipline in the
        car repair and service garages. There used to be long waits with no proper service provided. The quality of the
        service was low and the prices were high. That is when we decided to step in.</p>
      <p class="margin-bottom-10 text-justify text-teal">We started our journey with the sole purpose of making people’s
        life easy. Car service garages are supposed to lighten the burden of the customer and help them take care of
        their vehicle. Now we have a nationwide network of approved garages across the UK, but our motive is still the
        same.</p>
      <p class="margin-bottom-10 text-justify text-teal">The factors that make us unique from others are our distinctive
        services at affordable prices, our doorstep mechanic services, and our partiality towards the customer.
        Customers and their comfort is our main priority. We are aware that their time is valuable and due to a busy
        schedule it is difficult for the customer to bring their car to the garage. This is why we offer our collection
        and delivery service. We collect their car from a place of their choice and deliver it to their doorstep after
        it has been serviced.</p>
      <p class="margin-bottom-10 text-justify text-teal">You don’t have to contact separate garages for different
        services because we are a whole package. You want car repairs, replacements, a door to door service, or an
        MOT test, we are just a call or click away. You can visit our website and book services online.</p>
      <p class="margin-bottom-10 text-justify text-teal">Our team consists of highly qualified technicians and
        professional mechanics who perform honest services. They can guide you and answer all your inquiries as well.
        They are all very humble, polite, and give extra attention to customer service.</p>
      <p class="margin-bottom-10 text-justify text-teal">Our goal is to have a Manyautos garage in every city in the UK.
        So, all the people living in the UK can benefit from our services.</p>
        <h2>About Us:</h2>
      <p class="margin-bottom-10 text-justify text-teal">This website is owned and operated by <strong>ManyAutos</strong>, which is
        incorporated in England and Wales with registered number 09933100 whose registered address is 12 Elk Path, RG7
        1WE The registered VAT number is 251875292.</p>
      <p>You can <NuxtLink to='/contact'>submit any complaints</NuxtLink> or contact us by using the following details</p>
      <ul>
        <li>Email: <a href="mailto:info@manyautosltd.com">info@manyautosltd.com</a></li>
        <li>Address: 12 Elk Path, RG7 1WE</li>
      </ul>
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

  head: {
    title: 'Affordable Car Garages| About US',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'A company responsible for your car’s repair and maintenance. We provide you with the best affordable services visit our website or car Garage to know more about us and how it works we Collect and deliver your car free of cost after Auto repair and car servicing.'
      },
      {
        name: 'keywords', 
        content: 'Auto repair, car servicing, car repair tips, car garages, car repairing'
      },
      {
        hid: "og:title",
        property: "og:title", 
        content: "Affordable Car Garages| About US"
      },
      { 
        hid: "og:type",
        property: "og:type", 
        content: "website"
      },
      {
        hid:"og:url", 
        property: "og:url", 
        content: URL
      },
      {
        hid: "og:image",
        property: "og:image", 
        content: "logo-default.png"
      },
      {
        hid: "og:site_name",
        property: "og:site_name", 
        content: "ManyAutos LTD"
      },
      {
        hid: 'og:description',  property: 'og:description', 
        content: "A company responsible for your car’s repair and maintenance. We provide you with the best affordable services visit our website or car Garage to know more about us and how it works we Collect and deliver your car free of cost after Auto repair and car servicing."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Affordable Car Garages| About US"
      },
      {
        name: "twitter:description", 
        content: "A company responsible for your car’s repair and maintenance. We provide you with the best affordable services visit our website or car Garage to know more about us and how it works we Collect and deliver your car free of cost after Auto repair and car servicing."
      },
      {
        name: "twitter:image", 
        content: "logo-default.png"
      },
      {
        itemprop: "image", 
        content: "logo-default.png"
      },
      {
        hid: "og:type",
        property: "og:type", 
        content: "business.business"
      },
    ]
  }
}
</script>

<style lang="scss" scoped>
h2{
  margin-top: 40px;
  margin-bottom: 17px;
  font-size: 27px;
  font-family: "Open Sans", sans-serif;
  color: #00b4d8;
}
</style>