import Mock from 'mockjs'
import * as mUtils from '@/utils/mUtils'


let List = []
const count = 1000
let typelist = ['联通', '移动', '电信', '铁通']

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.Random.guid(),
    sortnum: i + 1,
    username: Mock.Random.cname(),
    address: Mock.mock('@county(true)'),
    createTime: Mock.Random.datetime(),
    updateTime: Mock.Random.now(),
    ip:Mock.mock('@ip'),
    region:Mock.mock('@region'),
    areaId:/\d{7}/,
    email: Mock.Random.email(),
    'isp|1': typelist
  }))
}

export default {
  // 用户登录
  login: config => {
    let data = JSON.parse(config.body);
    let userList = {};
    if(data.username === 'admin'){
        userList = {
            token:'admin',
            name:'管理员',
        }
    }else if(data.username === 'editor'){
        userList = {
            token:'editor',
            name:'编辑者',
        }
    }else{
       return {
        code: -1,
        data: {
          msg: "用户名错误",
          status:'fail'
        }
       }
    }
    return {
      code: 200,
      data: {
        userList: userList
      }
    }
  },
   // 用户登出
   logout: config => {
    return {
      code: 200,
      data: {
        userList: ""
      }
    }
  },
  // 获取登录用户信息
  getUserInfo:config => {
    let data = JSON.parse(config.body);
    let userList = {};
    if(data.token === 'admin'){
        userList = {
            roles: ['admin'],
            name:'admin',
            avatar:'https://img1.baidu.com/it/u=2766430024,2609720491&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
        }
    }else if(data.token === 'editor'){
        userList = {
            roles: ['editor'],
            name:'editor',
            avatar:'https://img95.699pic.com/xsj/03/2y/w9.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast'
        }
    }else{
        userList = {}
    }
    return {
      code: 200,
      data: {
        userList: userList
      }
    }
  },
   /**
   * 获取用户列表
   * 要带参数 name, page, limt; name可以不填, page,limit有默认值。
   * @param name, page, limit
   * @return {{code: number, count: number, data: *[]}}
   */
  getUserList:config => {
    const { limit , page } = JSON.parse(config.body);
    let mockList = List;
    const userList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 200,
      data: {
        total: mockList.length,
        userList: userList
      }
    }
  }

  
}