import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import homeService from '../services/homeService.js'
export default class City extends Component{
	constructor({}){
		super();
		this.state={
			cityData:[]
		}
	}
	
	render(){
		return (
			<ReactCSSTransitionGroup
				transitionName="slide"
				transitionAppear={true}
				transitionAppearTimeout={400}
				transitionEnter={false}
	      		transitionLeave={true}
	      		transitionLeaveTimeout={1000}>
				<div id='city' >
					
				</div>
			</ReactCSSTransitionGroup>
		)
	}
	componentWillMount(){
		homeService.getCity()
		.then((data)=>{
			this.setState({cityData:data})
		})
	}
	
	

	
}