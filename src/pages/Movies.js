import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import pagesService from '../services/pagesService.js'


import '../css/pages.css'
export default class Movies extends Component{
	constructor(){
		super();
		this.state={
			nowPlayData:[],		
			SoonPlatData:[],
			show:true
		
			
		}
	}
	
	render(){
		let contentStyle1={display: this.state.show? "block" : "none"}
		let contentStyle2={display: this.state.show? "none" : "block"}
		
		let titleStyle1=this.state.show? "active" : ""
		let titleStyle2=this.state.show? "" : "active"
		
		return (
			 
			<div class="page">
				<div class="main">
					<div class="headerNav">
						<ul class="list">
							<li onClick={this.hide.bind(this,"1")} class={titleStyle1} >正在热映</li>
							<li onClick={this.hide.bind(this,"2")} class={titleStyle2} >即将上映</li>
						</ul>
					</div>
					<ul class="list2" style={contentStyle1}>
					{
						this.state.nowPlayData.map((item,index)=>{
							return (
								<li key={index}>
									<img src={item.poster.origin}/>
									<div class="content">
										<h5>{item.name}</h5>
										<p class="title">{item.intro}</p>
										<p class="message">
											<span><i>{item.cinemaCount}</i>家影院上映</span>
											<span><i>{item.watchCount}</i>人购票</span>
										</p>
									</div>
									<strong><i>{item.grade}</i>&gt;</strong>
								</li>
							)
						})
					}
					</ul>
					<ul class="list3" style={contentStyle2}>
					{
						this.state.SoonPlatData.map((item,index)=>{
							return (
								<li key={index}>
									<img src={item.poster.origin}/>
									<div class="content">
										<h5>{item.name}</h5>
										<p class="title">{item.intro}</p>
										<p class="message">
											<span><i>{item.cinemaCount}</i>家影院上映</span>
											<span><i>{item.watchCount}</i>人购票</span>
										</p>
									</div>
									<strong><i>{item.grade}</i>&gt;</strong>
								</li>
							)
						})
					}
					</ul>
					
					
				</div>
			</div>
		)
		
	}
	
	componentWillMount(){
		pagesService.getMovies()
		.then((data)=>{
			this.setState({nowPlayData:data});
		})
		
		pagesService.getSoonMovies()
		.then((data)=>{
			this.setState({SoonPlatData:data});
		})
	}
	hide(val){
		if(val=="1"){
			this.setState({show:true});
		}
		if(val=="2"){
			this.setState({show:false});
		}
	}
	
}

	
