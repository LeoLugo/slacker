import React, { Component } from 'react';
import {connect} from 'react-redux'
import {sendMessage} from '../action'
import '../styles/home.css'


class Home extends Component {
  state = {
    message: ""
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



  render() {



    return (
      <div className="homecontainer">
        <div className="hometitle"><h1>Slacker</h1></div>
        <div className="homemaincontent">
          <div className="homemessagedisplay">
            {this.props.messages.map(msg => (
              <div className="hometext"><p>{msg.message}</p></div>
              ))}
          </div>

          <div className="homemessageform">
            <form onSubmit={this.manageSubmit}>
              <input className="homeinput" onChange={this.manageChange} type="text" name="message" value={this.state.message} />
              <button className="homebutton" type="submit">Submit</button>
            </form> 
          </div>
        </div>
      </div>

      )
  }
}


function mapStateToProps(state) {
  return{
    messages: state.messages
  }
}


export default connect(mapStateToProps)(Home);