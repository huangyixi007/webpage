import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function(config) {
    // console.log('http request ', config);
    return config;
}, function(error) {
    return Promise.reject(error);
})
// 响应拦截器
axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    return Promise.reject(error);
})

export default axios;