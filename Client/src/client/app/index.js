import React from 'react';
import ReactDOM from 'react-dom';
// import openSocket from 'socket.io-client';
import Socket from "./socketClient";
import { setTimeout } from 'timers';
import './style.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.socket = new Socket();
    this.backcolor = {'background-color':'white'};
    this.state = { value: '', result: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.socket.sendMessage(event.target.value);
    this.setState(
      { value: event.target.value });
  }


  handleSubmit(event) {
    this.socket.sendMessage(this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
    this.socket.connect(this);
  }


  componentWillUnmount() {
    this.socket.disconnect();
  }

  setStyle(result){
    // let element = this.refs.layer2;
    if(result===""){
      // element.setAttribute('background-color', 'red');
      this.backcolor = { 'background-color':'#e97373'};
      this.setState({ result: "Incorect request" });
    } else {
      this.backcolor = { 'background-color':'#5ee259'};}
      //element.setAttribute('background-color', 'green');;}
  }

  render() {
    return (
      <div id="wrapper">
        {/* <form onSubmit={this.handleSubmit}>
          <label> */}
        <div id="layer1">
        Type:
          <input id="layer3" type="text" value={this.state.value} onChange={this.handleChange} />
        </div>
        {/* </label>
          <input type="hidden" value="Submit" />
        </form> */}
        <div id="layer2" ref="layer2" style={this.backcolor}>
           {this.state.result}{/*<p id="layer4"></p> */}
          {this.setStyle(this.state.result)}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById('app'));