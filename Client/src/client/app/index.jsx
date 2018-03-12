import React from 'react';
import {render} from 'react-dom';

// class App extends React.Component {
//   render () {
//     let element = 
//       <form class="form-inline">
//         <div class="form-group">
//           <label for="name">What is your name?</label>
//           <input type="text" id="name" class="form-control" placeholder="Your name here..."/>
//         </div>
//           <button id="send" class="btn btn-default" type="submit">Send</button>
//       </form>;
//     return element;
//   }
// }

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.updateComment = this.updateComment.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);


    // get comment data from somewhere
    this.state = {
      comment: {
        text: 'some comment text',
        date: '22.12.2013: 12:33',
        user: {
          name: 'harold',
          avatar: 'https://naked-science.ru/sites/default/files/field/image/maxresdefault_60.jpg'
        }
      }
    };
    
  }
  updateComment(text){
        this.setState((prevState) => {
          const newState = Object.assign({}, prevState);
          newState.comment.text = text;
          newState.comment.date = new Date().toLocaleString();
          return newState;
        });
      }
  render() {
    return (
      <div style={{ border: '3px solid red' }}>
        <p>{this.state.comment.text}</p>
        <h4>Added at: {this.state.comment.date}</h4>
        Added by:
                {/* pass parent component data to child with props */}
        <UserProfile user={this.state.comment.user} />
        <div>
          {/* <button onClick={(text)=>updateComment(text)}>send</button> */}
          <form onSubmit={this.updateComment}>
            <label>
              Name:
          <input type="text" value={this.state.text} onChange={this.updateComment(value)} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>)
  }
}

class UserProfile extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <div style={{ border: '3px solid blue' }}>
        {/* pass components props further in hierarchy */}
        <Avatar img={this.props.user.avatar} />
        <p>User name: {this.props.user.name}</p>
      </div>
    )
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <div style={{ border: '3px solid yellow' }}>
        <img src={this.props.img} alt="Avatar" style={{ width: '10%' }} />
      </div>
    )
  }
}
render(<Comment/>, document.getElementById('app'));