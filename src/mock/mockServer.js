// 配置mock服务
import Mock from 'mockjs'
// 导入数据
import data from'./data.json'
// 获取食品分类
Mock.mock('/goods', {
    code: 0,
    data: data.goods
})
// 获取评价
Mock.mock('/ratings', {
    code: 0,
    data: data.ratings
})
// 获取商家信息
Mock.mock('/infos', {
    code: 0,
    data: data.infos
})

// export xxxx不需要暴露任何对象