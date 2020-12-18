import axios from 'axios';
// import nprogress from 'nprogress';

const http = axios.create({
  baseURL: 'http://manyautos.local/api/v2/c/',
});

http.interceptors.response.use(response => {
  // nprogress.done();

  return response;
}, error => {
  // nprogress.done();

  if (error.response && error.response.status == 401) {

    // store.dispatch('user/logout');
    throw 401;
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