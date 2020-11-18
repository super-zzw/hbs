import { Message } from 'element-ui'
import qs from "qs";

export default function ({ $axios,store }) {
  
  let language=store.state.locale=='zh'?'zh-CN':'en-US'
  $axios.defaults.timeout = 6000;
  $axios.onRequest(config => {
    // config.data["type"] == 2
    // console.log(1000,config)
    if(config.method == 'post'){
        console.log(config);
        config.data = {
            ...config.data,
            systype:1,  //1PC,2h5
            language: language
        }
        if (process.server || !(config.data instanceof FormData)) {
          config.data = qs.stringify(config.data, {
            allowDots: false //Option allowDots can be used to enable dot notation
          });
        }
    }else if(config.method == 'get'){
        config.params = {
            ...config.params,
            systype:1,
            language: language
        }
    }
    return config;
  });

  $axios.onResponse(response => {
      let res = response.data;
      if(res.code == 200000){
        return Promise.resolve(res.data);
      }else{
        Message({
            showClose: true,
            message: res.message,
            type: 'error'
        })
        Promise.reject(res);
      }
  });

  $axios.onError(error => {
    return Promise.reject(error);
  });
}
