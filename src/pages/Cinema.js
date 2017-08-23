import React, {Component} from 'react'
import pagesService from '../services/pagesService.js'

import '../css/store.css'

export default class Cinema extends Component{
	constructor(){
		super();
		this.state={
			cinemaData:[]
		}
	}
	render(){
		return (
			<div id="cinema" class="page">
				<div class="main1">
					{
						this.state.cinemaData.map((item,index)=>{
							return(
								<div class="contentbox" key={index}>
									<h1 class="title">{item.title}</h1>
									<div class="content-b">
										{
											item.arr.map((item2,index2)=>{
												return(
													<div key={index2}>
														<div class="cinemabox">
															<p>{item2.name}</p>
															<i>可乐爆米花</i><i>优惠活动</i>
															<span>{item2.address}</span>
															<em>距离未知</em>
														</div>
													</div>
												)
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
			this.setState({cinemaData:data})
			console.log(this.state.cinemaData)
		})
	}
	
}