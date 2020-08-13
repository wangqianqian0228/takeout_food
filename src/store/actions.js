// 通过mutation 间接更新states的多个方法的对象
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO,
    RESET_USERINFO
} from './mutation-types'
// 导入接口函数
import {
    reqAddress,
    reqFoodsCategorys,
    reqGeoShops,
    reqUserInfo,
    UserLoginOut
} from '../api'

export default {
    //   异步函数获取地址
    async getAddress({
        commit,
        state
    }, ) {
        // 发送ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        // 提交一个mutation
        if (result.code === 0) {
            //  获取地址成功
            const address = result.data
            commit(RECEIVE_ADDRESS, {
                address
            })
        }
    },
    //   异步函数获取商品分类
    async getFoodsCategories({
        commit
    }) {
        // 发送ajax请求
        const result = await reqFoodsCategorys()
        // 提交一个mutation
        if (result.code === 0) {
            //  获取地址成功
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, {
                categorys
            })
        }
    },
    //   异步函数获取商铺
    async getShops({
        commit,
        state
    }, ) {
        // 发送ajax请求
        // 对象的解构赋值
        const {
            latitude,
            longitude
        } = state
        const result = await reqGeoShops(latitude, longitude)
        // 提交一个mutation
        if (result.code === 0) {
            //  获取地址成功
            const shops = result.data
            commit(RECEIVE_SHOPS, {
                shops
            })
        }
    },
    // 同步记录用户信息
    getUser({commit}, userinfo) {
        // 不用发送ajax请求，只用存储信息
        commit(RECEIVE_USERINFO, {
            userinfo
        })
    },
    // 异步获取用户信息
    async getUserInfo({commit}) {
        const result = await reqUserInfo()
        if (result.code === 0) {
            const userinfo = result.data
            commit(RECEIVE_USERINFO, {
                userinfo
            })
        }
    },
    // 用户退出登录请求
    async logOut({commit}){
        const result=await UserLoginOut()
        if(result.code===0){
            commit(RESET_USERINFO)
        }
    }
}