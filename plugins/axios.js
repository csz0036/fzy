export default function ({ $axios, redirect }) {
  // 请求回调
  $axios.onRequest(config => {
    // console.log('Making request to ' + JSON.stringify(config)) 
  })
  // 返回回调
  $axios.onResponse(res => {
    //   console.log('返回回调', res)
  })
  // 错误回调
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
  $axios.setHeader('Authorization', '123')   //设置头部信息
  // 基本配置
  $axios.defaults.timeout = 10000
  $axios.defaults.baseURL =  process.env.NODE_ENV === 'production' ? 'https://fix.songshupinpin.com/' : "https://dfix.songshupinpin.com/"
}