import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import SilderBar from './views/common/SilderBar.js'
import AppHeader from './views/common/AppHeader.js'

import Home from './pages/Home.js'
import Movies from './pages/Movies.js'
import Cinema from './pages/Cinema.js'
import Shop from './pages/Shop.js'
import Me from './pages/Me.js'
import Card from './pages/Card.js'
import City from './pages/City.js'
import Details from './pages/Details'
import CinemaDetail from './pages/CinemaDetail.js'


import './css/app.css'


export default class App extends Component{
	constructor(){
		super();
		this.state={
			showBar:false,
			headerTitle:"卖座电影"
		}
		
	}
	render(){
		return(
			<BrowserRouter>
				<div>
					<AppHeader title={this.state.headerTitle} menuHandle={this.menuHandle.bind(this)}/>
					<Route path="/" render={({history, location})=>{
						return <SilderBar history={history} 
									      show={this.state.showBar}
									      pathname={location.pathname}
									      hideHandle={this.menuHandle.bind(this)}/>
					}}/>
					
					<Route path="/" exact component={Home}/>
					<Route path="/movies" component={Movies}/>
					<Route path="/cinema" component={Cinema}/>
					<Route path="/shop" component={Shop}/>
					<Route path="/me" component={Me}/>
					<Route path="/card" component={Card}/>
					<Route path="/city-list" component={City}/>
					<Route path="/details/:id" component={Details}/>
					<Route path="/cinemadetail/:id" component={CinemaDetail}/>

					
				</div>
			</BrowserRouter>
		)
	}
	
	menuHandle(headerTitle){

		this.setState({showBar:!this.state.showBar});
		if(headerTitle){
			this.setState({headerTitle});
		}
	}
}