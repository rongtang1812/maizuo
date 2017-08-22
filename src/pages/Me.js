import React, {Component} from 'react'

import '../css/pages.css'
export default class Me extends Component{
	
	render(){
		return (
			<div id="me" class="page">
				<form>
					<input type="text" placeholder="输入手机号/邮箱" />
					<input type="text" placeholder="输入密码/验证码" />
					<input type="button" value="登录"/>
					
				</form>
			</div>
		)
	}
	
}

