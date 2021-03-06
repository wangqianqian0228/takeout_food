// 将mutation-type中的变量引入过来111
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO,
    RESET_USERINFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFOS
} from './mutation-types'

export  default{
    // RECEIVE_ADDRESS为函数,参数为传递数据的对象{address}，为对象格式
    [RECEIVE_ADDRESS](state,{address}){
        state.address = address;
    } ,
    [RECEIVE_CATEGORYS](state,{categorys}){
        state.categorys = categorys;
    } ,
    [RECEIVE_SHOPS](state,{shops}){
        state.shops = shops;
    } ,
    [RECEIVE_USERINFO](state,{userinfo}){
        state.userinfo = userinfo;
    } ,
    [RESET_USERINFO](state){
        state.userinfo = {};
    },
    [RECEIVE_INFOS](state, {infos}) {
        state.infos = infos
    },
    [RECEIVE_RATINGS](state, {
        ratings
    }) {
        state.ratings = ratings
    },
    [RECEIVE_GOODS](state, {
        goods
    }) {
        state.goods = goods
    },
}