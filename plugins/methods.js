import Vue from 'vue'
import methods from '~/utils/methods' //自定义过滤器
// console.log(methods)
// for(let item in methods){
//     console.log(1,item)
// }
Object.keys(methods).forEach(k => {
    Vue.prototype[k] = methods[k]
})
