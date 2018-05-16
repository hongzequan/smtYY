import axios from 'axios';
import { Message } from 'element-ui';


let axiosBaseUrl
let DEFAULTS_API='api/' //因为config/index做了跨域处理
if(process.env.NODE_ENV == 'production'){
    // 部署服务调用正式地址
    // axiosBaseUrl = 'http://'+window.location.host
    axiosBaseUrl = 'http://yunyingapi.sumaotong.com'  //线上接口地址
    DEFAULTS_API='';
}else{
    // 开发测试地址
    // axiosBaseUrl = 'http://127.0.0.1:3000' //本地
}
axios.defaults.timeout = 5000
axios.defaults.baseURL = axiosBaseUrl
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// //http request 拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);

// //http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(DEFAULTS_API+url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(DEFAULTS_API+url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            console.log(err)
            reject(err)
          })
   })
 }

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(DEFAULTS_API+url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(DEFAULTS_API+url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}