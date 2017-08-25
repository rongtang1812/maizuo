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
			// console.log(response.data.data.films)
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
			   console.log(response.data.data.film)
			var newObj= {};
			//图片
			newObj.img = response.data.data.film.cover.origin;
			//主演
			newObj.actors = response.data.data.film.actors;
			//类型
			newObj.category = response.data.data.film.category;
			//导演
			newObj.director = response.data.data.film.director;
			//区域
			newObj.nation = response.data.data.film.nation;
			//语言
			newObj.language = response.data.data.film.language;
			//电影名
			newObj.name = response.data.data.film.name;
			//剧情
			newObj.synopsis = response.data.data.film.synopsis;
			//id
			newObj.id = response.data.data.film.id;
			//上映时间
			var Dat = new Date(response.data.data.film.premiereAt)
			var mont = Dat.getMonth()+1;
			var dd = Dat.getDate()
			newObj.premiereAt = mont +"月"+ dd+"日上映"
			resolve(newObj);
			// resolve(response.data.data)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

function getCity(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.cityApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
			// console.log(response.data.data.cities)
			resolve(response)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

function getCinemaDetail(id){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.cinemaDetailApi}${id}?__t=${new Date().getTime()}`)
		.then((response)=>{
			// console.log(response.data.data.cinema)
			var arr=[];
			var servicesArr=[];
			var newArr=[];
			//把请求回来的数组push成一个数组
			arr.push(response.data.data.cinema)
			// console.log(arr)
			//遍历全部数组
			arr.map((item,index)=>{
				newArr.push({
					address:item.address,
					phone:item.telephones[0],
					 services:item.servicesArr
				},	//遍历服务数组
				item.services.map((item2,index2)=>{
					console.log(item)
				})
				
				
			);
				
				console.log(servicesArr)
				console.log(newArr);
			})
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
	getDetails,
	getCity,
	getCinemaDetail

}
