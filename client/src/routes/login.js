import React, { Component } from 'react';
import '../styles/login.css'
import {login} from '../action' 
import {register} from '../action' 




class Login extends Component {
	state = {
		username: '',
		password: ''
	}

	handleLogin = (e) => {
		e.preventDefault()
		login(this.state.username, this.state.password, (location) => {
			this.props.history.push(location)
		})
		this.setState({
			username: '',
			password: ''
		})
	}

	handleRegister = (e) => {
		e.preventDefault()
		register(this.state.username, this.state.password, (location) => {
			this.props.history.push(location)
		})
		this.setState({
			username: '',
			password: ''
		})
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	render() {

		return(
			<div className="loginouterdiv">
				<div className="logintitle"><h1>Slacker</h1></div>
				<div className="logincontainer">
					<div className="loginform">
						<h1>Login :</h1>
								<form className="loginformform" onSubmit={this.handleLogin}>
								<label htmlFor="username">Username :</label><input className="logininput" type="text" name="username" placeholder="Username" onChange={this.handleChange} />
								<label htmlFor="password">Password:</label><input className="logininput" type="password" name="password" placeholder="Password" onChange={this.handleChange} />
								<button className="loginbutton" type="submit">Submit</button>
								</form>
					</div>
					<div className="registerform">
						<h1>Register :</h1>
							<form className="loginformform" onSubmit={this.handleRegister}>
							<label htmlFor="username">Username :</label>
								<input className="logininput" type="text" name="username" placeholder="Username" onChange={this.handleChange} />
								<label htmlFor="password">Password :</label>
								<input className="logininput" type="password" name="password" placeholder="Password" onChange={this.handleChange} />
								<button className="loginbutton" type="submit">Submit</button>
							</form>
					</div>
				</div>
			</div>

			)

	}


}




export default Login