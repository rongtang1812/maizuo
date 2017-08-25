import React, {Component} from 'react'
import homeService from '../services/homeService.js'

import "../css/pages.css"
export default class Dateils extends Component{
    constructor({location}){
        super();       
		this.state={
            id:location.pathname.slice(9),
            dateilsData:{},
            presonData:[]
        }
        
	}
    render(){
       
        return(
            <div class="page">
              <div class="contents">
                   <img src={this.state.dateilsData.img}/>
              </div>
              <div class="film">
                  <h3>影片介绍</h3>
                  <div class="film-b">
                    <p>导演：{this.state.dateilsData.director}</p>
                    <p><i>主演：</i>
                        {
                            this.state.presonData.map((item,index)=>{
                                return(
                                    <span key={index}>{item.name}|</span>
                                )
                            })
                        }
                    </p>
                    <p><i>地区语言：{this.state.dateilsData.nation}（{this.state.dateilsData.language}）</i></p>
                    <p><i>类型：</i>{this.state.dateilsData.category}</p>
                    <p>上映时间：{this.state.dateilsData.premiereAt}</p>
                    <div class="synopsis">{this.state.dateilsData.synopsis}</div>
                  </div>
                  <div class="operation">
                      <button>立即购买</button>
                  </div>
              </div>
           </div>
        )
    }
    componentWillMount(){
        homeService.getDetails(this.state.id)
        .then((data)=>{
            console.log(data)
            this.setState({dateilsData:data});
            this.setState({presonData:this.state.dateilsData.actors})
		})
    }
}