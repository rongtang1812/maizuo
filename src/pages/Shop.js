import React, {Component} from 'react'

import pagesService from '../services/pagesService.js'
import '../css/store.css'
let bannerSwiper = null;
export default class Shop extends Component{
	constructor(){
			super();
			this.state = {
				stroeBannerData: [],
				stroeListData:[],
				stroeHotimg:[],
				stroestart:[],
				stroeGood:[],
				page:1
				
				
			}
		}
	render(){
		return (
			<div class="page">
				<div ref="banner" class="swiper-container store-banner">
					<div class="swiper-wrapper">
					{
						this.state.stroeBannerData.map((item,index)=>{
							return (
								<div key={index} class="swiper-slide">
									<img src={item.img}/>
								</div>
								
							)
						})
					}
					</div>
					
				</div>
				<div class="shops-list">
					<ul>
					{
						this.state.stroeListData.map((item,index)=>{
							return(
								<li key= {index}>
									<img src={item.imageSrc} />
									<span>{item.name}</span>
								</li>
							)
						})
					}
					</ul>
				</div>
				<div class="hotImg">
					{
						this.state.stroeHotimg.map((item,index)=>{
							return(
								<img key={index} src={item.imageSrc}/>
							)
						})
					}
				</div>
				<div class="main-list">
					{
						this.state.stroestart.map((item,index)=>{
							return(
								<div class="mainBox" key={index} >
									<div class="imgbox"><img src={item.imageSrc}/></div>
									<ul>
										{
											item.products.map((item2,index2)=>{
												return(
													<li key={index2}>
														<div class="minbox">
															<img src={item2.image}/>
															<p>{item2.name}</p>
														<span>￥{item2.price/100+".00"} </span>
														</div>
													</li>
												)
											})
										}
									</ul>
								</div>
							)
						})
					}
				</div>
				<div class="container">
					<div class="title">— 好货精选 —</div>
					<div class="item">
					{
						this.state.stroeGood.map((item,index)=>{
							return(
								<div class="item-list" key={index}>
									<img src={item.skuList[0].image}/>
									<p class="name">{item.masterName}</p>
									<div class="list-b"><span class="price">￥{item.skuList[0].price/100+".00"}</span> <span class="cont">已售{item.skuList[0].salesCount}</span></div>
								</div>
							)
						})
					}
					</div>
				</div>
			</div>
		)
	}
	componentWillMount(){
		pagesService.getStroeBanner()
		.then((data)=>{
			this.setState({stroeBannerData:data});
			bannerSwiper.update();
			
		})
		pagesService.getShopList()
		.then((data)=>{
			
			this.setState({stroeListData:data[0]})
			this.setState({stroeHotimg:data[1]})	
			this.setState({stroestart:data[2]})	
				//  console.log(this.state.stroestart)
		})
		pagesService.getstroeGood(this.state.page)
		.then((data)=>{
			this.setState({stroeGood:data})
			console.log(this.state.stroeGood)

		})		
		
	}
	componentDidMount(){
		bannerSwiper=new Swiper(this.refs.banner,{
			loop:true,
			autoplay: 2000
			
		})
	}
	
}