import React, {Component} from 'react'
import homeService from '../services/homeService.js'

export default class Dateils extends Component{
    constructor({location}){
        super();       
		this.state={
            id:location.pathname.slice(9),
            dateilsData:[]
        }
        
	}
    render(){
       
        return(
            <div class="page">
                详情页
                
                   <p> {this.state.id}</p>
                
            </div>
        )
    }
    componentWillMount(){
        homeService.getDetails(this.state.id)
        .then((data)=>{
            this.setState({dateilsData:data});
            
		})
    }
}