import React, { Component } from 'react';
// import { connect } from 'react-redux';

// const mapStateToProps = state => {
//   // console.log('form map state', state);
//   return {

//   }
// }

class Home extends Component {
  // componentDidMount() {
  //   // console.log('state', this.state);
  //   // console.log('Home props', this.props);
  //   this.props.dispatch({
  //     type: 'TEST',
  //     str: 'Hasan'
  //   })
  // }
  // componentDidUpdate() {
  //   // console.log('Home props updated', this.props)
  // }
  render() {
    document.title = 'Home';
    return (
      <div>
        <h1>This is home</h1>
      </div >
    );
  }
}

export default Home;