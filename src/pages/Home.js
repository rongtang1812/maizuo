import React, {Component} from 'react'
//import ReactSwipe from 'react-swipe';

import homeService from '../services/homeService.js'

import '../css/home.css'

let bannerSwiper = null;

export default class Home extends Component{
	constructor(){
			super();
			this.state = {
				bannerData: [],
				contenData:[],
				soonData:[]
			}
		}
	
	render(){
		return (
			<div id="home" class="page">
				<div ref="banner" class="swiper-container home-banner">
					<div class="swiper-wrapper">
					{
						this.state.bannerData.map((item,index)=>{
							return (
								<div key={index} class="swiper-slide">
									<img src={item.imageUrl}/>
								</div>
							)
						})
					}
					</div>
				</div>
				<div id="main">
					<ul class="list">
					{
						this.state.contenData.map((item,index)=>{
							return (
								<li key={index}>
									<img src={item.cover.origin}/>
									<div class="main-bottom">
										<h5>{item.name}</h5>
										<p>
										<span>{item.cinemaCount}家影院上映</span>
										<span>{item.watchCount}人购买</span>
										</p>
										<span class="info">{item.grade}</span>
									</div>
								</li>
							)
						})
					}
					<div class="more">更多热映电影</div>
					</ul>
					
					<ul class="list2">
					{
						this.state.soonData.map((item,index)=>{
							return(
								<li key={index}>
									<img src={item.cover.origin}/>
									<div class="li-buttom">
										<span class="name">{item.name}</span>
										<span class="time">8月25日上映</span>
									</div>
								</li>
							)
						})
						
					}
					<div class="moreSoon">
					更多即将上映电影
					</div>
					</ul>
				</div>
			</div>
		)
	}
	
	componentWillMount(){
		homeService.getHomeBanner()
		.then((data)=>{
			data.splice(0,0,data[data.length-1]);
			data.push(data[1]);
//			console.log(data);
			
			this.setState({bannerData:data});
			bannerSwiper.update();
			bannerSwiper.slideTo(1,0);
		});
		
		homeService.getHomeConten()
		.then((data)=>{
			this.setState({contenData:data});
		})
		
		homeService.getHomeSoon()
		.then((data)=>{
			this.setState({soonData:data});
		})
		
		
	}
	
	componentDidMount(){
		console.log(this.state.bannerData.length)
		bannerSwiper = new Swiper(this.refs.banner, {
			loop: true
		});
	}

	
}
