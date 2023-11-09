// 统一管理请求
import requests from './axios.js';
//上传商品信息
let addshops = (param)=>{
	return requests.post('/addshops',param)
}
//查找商品数据
let findshops =(param)=>{
	return requests.post('/findshops',param)
}

export default{addshops,findshops}