import axios from 'axios'
import API from '../api'

//请求轮播图数据
function getHomeBanner(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.homeBannerApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
//			console.log(response.data.data.billboards);
			resolve(response.data.data.billboards);
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

//请求热映数据
function getHomeConten(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.homeContenApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
			console.log(response.data.data.films)
			resolve(response.data.data.films)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

//请求即将上映数据
function getHomeSoon(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.homeSoonApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
//			console.log(response.data.data.films)
			resolve(response.data.data.films)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}
//详情页数据请求
function getDetails(id){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.detailsApi}${id}?__t=${new Date().getTime()}`)
		.then((response)=>{
			resolve(response.data)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}



function test(){
	axios.get("/v4/api/cinema?__t=1502955788535")
	.then((response)=>{
//		console.log(response);
	})
	.catch((error)=>{
		console.log(error)
	})
}





test();
export default {
	getHomeBanner,
	getHomeConten,
	getHomeSoon,
	getDetails
}
