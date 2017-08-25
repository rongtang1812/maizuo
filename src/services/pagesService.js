import axios from 'axios'
import API from '../api'


//请求侧边栏影片页面数据

function getMovies(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.pagesNowplayApi}`)
		.then((response)=>{
//			console.log(response.data.data.films);
			resolve(response.data.data.films)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

//请求侧边栏即将上映影片页面数据
function getSoonMovies(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.pagesSoonplayApi}`)
		.then((response)=>{
//			console.log(response.data.data.films);
			resolve(response.data.data.films)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}


//请求侧边栏影院数据

function getCinemas(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.pagesCinemasApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
			// console.log(response.data.data.cinemas);			
			// resolve(response.data.data.cinemas)
			// console.log(response.data.data.cinemas);			
			var newArr = response.data.data.cinemas;
			
			var arr1=[];
			var arr2=[];
			// console.log(response);
			// console.log(newArr);
			newArr.map((item,index)=>{
				var player = item.district.name				
				if(arr1.indexOf(player)==-1){
					arr1.push(player)
				}			
			})
			// console.log(arr1)
			arr1.map((item,index)=>{
			  arr2.push({
                 title:item,
				 arr:[],
				  show:false			  			  
			  })					
			})		
			newArr.map((item,index)=>{
				arr2.map((item2,index2)=>{  					
					if (item2.title==item.district.name) {
						item2.arr.push(item)	
					}
					 
				})
				
			})
				arr2[0].show=true
				// console.log(arr2)		
			     
				resolve(arr2)				
		})
		.catch((error)=>{
				console.log(error)
		})
	})
}

function getStroeBanner(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.stroeBannerApi}`)
		.then((response)=>{
//			console.log(response.data)
			resolve(response.data)
		})
		.catch((error)=>{
				console.log(error)
		})
	})
}

function getShopList(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.stroeShopListApi}`)
		.then((response)=>{
			console.log(response)
			var arr1=response.data.data.slice(0,8)
			var arr2=response.data.data.slice(10,12)
			var arr3=response.data.data.slice(12,20)
			var newArr=[]
			newArr.push(arr1,arr2,arr3)
			resolve(newArr)
			//  console.log(response.data.data)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

function getstroeGood(page){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.stroeGoodApi}&page=${page}`)
		.then((response)=>{
			// console.log(response.data.data.list)
			resolve(response.data.data.list)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}


export default {
	getMovies,
	getCinemas,
	getSoonMovies,
	getStroeBanner,
	getShopList,
	getstroeGood
}
