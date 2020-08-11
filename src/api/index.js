// n个接口请求函数
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
// 向外暴露一个函数
import ajax from './ajax'
// const BASE_URL ='http://localhost:3000'
const BASE_URL='/api'
export const reqAddress = (geohash)=>ajax(`${BASE_URL}/position/${geohash}`)
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodsCategorys =()=>ajax(`${BASE_URL}/index_category`)
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqGeoShops = (latitude,longitude)=>ajax(`${BASE_URL}/shops`,{latitude,longitude})
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const keyWordsShops =(geohash,keyword)=>ajax(`${BASE_URL}/search_shops`,{geohash,keyword})
// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const loginUser =({name,pwd,captcha})=>ajax(`${BASE_URL}/login_pwd`,{name,pwd,captcha},'POST')

// [7、发送短信验证码](#7发送短信验证码)<br/>
export const sendcaptcha = (phone)=>ajax(`${BASE_URL}/sendcode`,{phone})
// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const phoneLogin =(phone,code)=>ajax(`${BASE_URL}/login_sms`,{phone,code},'POST')
// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserInfo = ()=>ajax(`${BASE_URL}/userinfo`)
// [10、用户登出](#10用户登出)<br/>
export const UserLoginOut = ()=>ajax(`${BASE_URL}/logout`)