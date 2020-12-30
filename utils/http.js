import axios from 'axios';
// import nprogress from 'nprogress';

let baseURL = null;

if (process.client) {
  baseURL = window.location.hostname == 'localhost'
    ? process.env.LOCAL_API_URL
    : process.env.PRODUCTION_API_URL
}

const http = axios.create({
  baseURL,
});

http.interceptors.response.use(response => {
  // nprogress.done();

  return response;
}, error => {
  // nprogress.done();

  if (error.response && error.response.status == 401) {

    // store.dispatch('user/logout');
    // throw 401;
    window.location.href='/login?redirect_url='+window.location.pathname
  }

  throw error;
})


http.interceptors.request.use(config => {
  // nprogress.start();

  // if (store.state.user.accessToken)
  //   config.headers.common['Authorization'] = 'Bearer ' + store.state.user.accessToken
  
  return config;
})

export default http;