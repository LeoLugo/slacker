import React, { Component } from 'react';
import {connect} from 'react-redux'
import {sendMessage} from '../action'
import '../styles/home.css'
import {logout} from '../action'
import {Redirect} from 'react-router-dom'


class Home extends Component {
  state = {
    message: "",
    isAuthenticated: false
  }

  manageChange = (e) => {
    this.setState({ 
      [e.target.name] : e.target.value
    })
  }

  manageSubmit = (e) => {
    e.preventDefault()
    sendMessage(this.state.message)
    this.setState({
      message: ""
    })
  }

logout = (e) => {
  e.preventDefault()
  logout()
  this.props.history.push('/')
}





  render() {



    return (
      <div>{this.props.isAuth ?
        <div className="homecontainer">
        <button className="logoutbutton" onClick={this.logout}>Logout</button>
          <div className="hometitle"><h1>Slacker</h1></div>
          <div className="homemaincontent">
            <div className="homemessagedisplay">
              {this.props.messages.map((msg, ind) => (
                <div key={'message' + ind} className="hometext"><p>{msg.message}</p></div>
                ))}
            </div>

            <div className="homemessageform">
              <form onSubmit={this.manageSubmit}>
                <input className="homeinput" onChange={this.manageChange} type="text" name="message" value={this.state.message} />
                <button className="homebutton" type="submit">Submit</button>
              </form> 
            </div>
          </div>
        </div>: <Redirect to="/" />}
      </div>

      )
  }
}


function mapStateToProps(state) {
  return{
    messages: state.messages,
    isAuth: state.isAuthenticated
  }
}


export default connect(mapStateToProps)(Home);





