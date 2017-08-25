import React, {Component} from 'react'
import pagesService from '../services/pagesService.js'
import {Link} from 'react-router-dom'
import '../css/store.css'

export default class Cinema extends Component{
	constructor(){
		super();
		this.state={
			cinemaData:[],
			isshow:0
		}
	}
	render(){	
		
		return (
		    <div id="cinema" class="page">
				<div class="main1">
					{
						this.state.cinemaData.map((item,index)=>{
							return(
								<div class="contentbox" key={index} style={{height:this.state.isshow==index? "auto" : "40px"}}>
									<h1 class="title" onClick={this.bnt.bind(this,index,item.show)}>{item.title}</h1>
									<div class="content-b" >
										{
											item.arr.map((item2,index2)=>{
												return(
													<div key={index2}>
														<Link to={"/cinemadetail/"+item2.id}>
															<div class="cinemabox">
																<p>{item2.name}</p>
																<i>可乐爆米花</i><i>优惠活动</i>
																<span>{item2.address}</span>
																<em>距离未知</em>
															</div>
														</Link>
													</div>																								)
											})
										}
									</div>
								</div>
							)
						})
					}
				
				</div>
			</div>
		)
	}
	componentWillMount(){
		pagesService.getCinemas()
		.then((data)=>{
			//  console.log(data)
			this.setState({cinemaData:data})	
		})
	}
	bnt(index,show){
		
		this.setState({isshow:index})
			if(this.show){
				var box = document.getElementsByClassName("contentbox")[index]
				box.style.height = "40px"
				this.show=!this.show
			}
			else{
				var box = document.getElementsByClassName("contentbox")[index]
				box.style.height = "auto"
				this.show=!this.show
			}
         
		
	}
	
}