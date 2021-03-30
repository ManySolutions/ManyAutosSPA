const test_event_code = process.env.FBQ_TEST_CODE || '';

export function fbqContact(
  $fb, fn, ln, em, mobile_no, car_registration_number = ''
) {
  return;
  $fb.track('Contact', {
    fn, ln, em, mobile_no, car_registration_number,
    test_event_code,
  });
}

export function fbqAddToCart(
  $fb, id, content_name,
  value
) {
  return;
  $fb.track('AddToCart', {
    contents: [
      {id, quantity: 1}
    ],
    content_name, 
    value, 
    content_type: 'product',
    currency: process.env.CURRENCY_CODE,
    product_catalog_id: id,
    test_event_code,
  });
}

export function fbqCompleteRegistration(
  $fb, fn, ln, em, mobile_no, country_code
) {
  return;
  $fb.track('CompleteRegistration', {
    fn, ln, em, mobile_no, country_code,
    test_event_code,
  });
}

export function fbqInitiateCheckout(
  $fb, content_category, contents, num_items, value
) {
  return;
  $fb.track('InitiateCheckout', {
    content_category, contents, value,
    num_items, 
    currency: process.env.CURRENCY_CODE,
    content_type: 'product',
    test_event_code,
  });
}

export function fbqPurchase(
  $fb, contents, num_items, value, user, purchase_id, payment_plan_id=null
) {
  return;
  $fb.track('Purchase', {
    contents, 
    content_type: 'product',
    value,
    num_items, 
    currency: process.env.CURRENCY_CODE,
    user,
    payment_plan_id,
    purchase_id,
    test_event_code,
  });
}

export function fbqFindLocation(
  $fb, postcode, lat='', lng='', town_or_city='', county='', district='', country=''
) {
  return;
  $fb.track('FindLocation', {
    postcode, town_or_city, county, district, country, lat, lng,
    test_event_code,
  });
}

export function fbqLead(
  $fb, reg_no, content_name='', covid_campaign=false
) {
  return;
  $fb.track('Lead', {
    reg_no, content_name,
    currency: process.env.CURRENCY_CODE,
    value: .01,
    covid_campaign,
    test_event_code,
  });
}