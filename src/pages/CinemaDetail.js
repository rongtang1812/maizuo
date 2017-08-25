import React,{Component} from 'react'
import homeService from '../services/homeService.js'

import '../css/home.css'

export default class CinemaDetail extends Component{
    constructor({location}){
        console.log(location)
        super();
        this.state={
           id:location.pathname.slice(14)

        }
    }
    render(){
        return(
            <div class="page">
                <div class="bgbox"><img src="../../static/img/img4.png"/></div>
                <i class="iconfont .icon-jiaotong"></i>
            </div>
        )
    }
    componentWillMount(){
        homeService.getCinemaDetail(this.state.id)
        .then((data)=>{

        })
    }
}