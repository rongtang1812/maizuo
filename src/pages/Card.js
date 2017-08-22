import React, {Component} from 'react'

import "../css/pages.css"
export default class Card extends Component{
	constructor(){
		super();
		this.state={
			show:true
		}
	}
	render(){
		let boxStyle1={display:this.state.show? "block" : "none"}
		let boxStyle2={display:this.state.show? "none" : "block"}
		let titleStyle1=this.state.show? "active" : ""
		let titleStyle2=this.state.show? "" : "active"
		return (
			<div class="page card">
				<ul class="cardTabs">
					<li onClick={this.hide.bind(this,"1")} class={titleStyle1}>卖座卡</li>
					<li onClick={this.hide.bind(this,"2")} class={titleStyle2}>电子卖座卡</li>
				</ul>
				<div class="cardBox" style={boxStyle1}>
					<div><span>卡号：</span><input type="text" placeholder="请输入卡号" /></div>
					<div><span>密码：</span><input type="text" placeholder="请输入密码" /></div>
					<input class="cardBnt" type="button" value="查询"/>

				</div>
				<div class="cardBox2" style={boxStyle2}>
					<div><span>卡号：</span><input type="text" placeholder="请输入15位电子卖座卡号" /></div>
					<input class="cardBnt" type="button" value="查询"/>
				</div>
			</div>
			
		)
	}
	hide(val){
		if(val==1){
			this.setState({show:true})
		}
		else{
			this.setState({show:false})
		}
	}
	
}