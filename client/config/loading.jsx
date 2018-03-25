import axios from 'axios'

//拦截请求
axios.interceptors.request.use((config)=>{
  // setTimeout(()=>{
  //  console.log('loading...') 
  // },2000)
  // return config
})
//拦截响应
axios.interceptors.response.use((config)=>{
  // setTimeout(()=>{
  //   console.log('11...') 
  //  },2000)
  return config
})