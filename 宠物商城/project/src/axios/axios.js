// 进行axios二次封装的文件

// 引入axios
import axios from 'axios';

// 创建axios实例
let requests = axios.create({
	// 请求服务器地址
	baseURL: 'http://localhost:3000',
	timeout: 10000
})

// 拦截器
// 添加请求拦截器
requests.interceptors.request.use(function(config) {
	// 使请求头携带token
	let headers = config.headers;//获取请求头
	let token = window.localStorage.getItem('token')||' ';
	if(!headers.Authorization) headers.Authorization = `Bearer ${token}`;
	// 在发送请求之前做些什么
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
requests.interceptors.response.use(function(response) {
	// 2xx 范围内的状态码都会触发该函数。
	// 对响应数据做点什么
	return response.data;
}, function(error) {
	// 超出 2xx 范围的状态码都会触发该函数。
	// 对响应错误做点什么
	return Promise.reject(error);
});

export default requests;