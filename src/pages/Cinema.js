import React, {Component} from 'react'
import pagesService from '../services/pagesService.js'

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
				<h1 class="title">宝安区</h1>
				<div class="main">
					<ul>
					{
						this.state.cinemaData.map((item,index)=>{														
							return(
								<li key={index}>
									<h3>{item.name}</h3>
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
		pagesService.getCinemas()
		.then((data)=>{
			this.setState({cinemaData:data})
		})
	}
	
}