import React, { Component } from 'react';
import '../styles/login.css'




class Login extends Component {

	handleLogin = (e) => {
		e.preventDefault()
	}

	handleRegister = (e) => {
		e.preventDefault()
		console.log(e.target.username.value)
	}


	render() {

		return(
			<div className="loginouterdiv">
				<div className="logintitle"><h1>Slacker</h1></div>
				<div className="logincontainer">
					<div className="loginform">
						<h1>Login :</h1>
								<form className="loginformform" onSubmit={this.handleLogin}>
								<label for="username">Username :</label><input className="logininput" type="text" name="username" placeholder="Username"/>
								<label for="password">Password:</label><input className="logininput" type="password" name="password" placeholder="Password"/>
								<button className="loginbutton" type="submit">Submit</button>
								</form>
					</div>
					<div className="registerform">
						<h1>Register :</h1>
							<form className="loginformform" onSubmit={this.handleRegister}>
							<label for="username">Username :</label>
								<input className="logininput" type="text" name="username" placeholder="Username"/>
								<label for="password">Password :</label>
								<input className="logininput" type="password" name="password" placeholder="Password" />
								<button className="loginbutton" type="submit">Submit</button>
							</form>
					</div>
				</div>
			</div>

			)

	}


}




export default Login