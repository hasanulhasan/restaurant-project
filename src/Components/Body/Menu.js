import React, { Component } from 'react';
import { Button, CardColumns, Modal, ModalBody, ModalFooter } from 'reactstrap';
// import DISHES from '../../data/dishes/dishes';
// import COMMENTS from '../../data/dishes/comments';
import DishDetails from './DishDetails';
import MenuItem from './MenuItem';
import { connect } from 'react-redux';
import * as actiontypes from '../../redux/actionTypes'
import { addComment } from '../../redux/actionCreator';

const mapStateToProps = state => {
  // console.log('form map state', state); // mapToState make redux state to props of component
  return {
    dishes: state.dishes,
    comments: state.comments
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)
    )
  }
}

class Menu extends Component {
  state = {
    // dishes: DISHES,
    // comments: COMMENTS,
    selectedDish: null,
    modalOpen: false
  }
  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }


  onDishSelect = dish => {
    // console.log(dish);
    this.setState({
      selectedDish: dish,
      modalOpen: !this.state.modalOpen
    })
  }

  render() {
    document.title = 'Menu';
    const menu = this.props.dishes.map(item => {
      return (
        <MenuItem
          dish={item}
          key={item.id}
          onDishSelect={() => this.onDishSelect(item)}>
        </MenuItem>
      )
    });

    let dishDetail = null;
    if (this.state.selectedDish != null) {
      const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id)
      dishDetail =
        <DishDetails
          dish={this.state.selectedDish}
          comments={comments}
          addComment={this.props.addComment}
        ></DishDetails>
    }
    return (
      <div className='container'>
        <div className='row'>
          <CardColumns>
            {menu}
          </CardColumns>
          <Modal isOpen={this.state.modalOpen}>
            <ModalBody>
              {dishDetail}
            </ModalBody>
            <ModalFooter>
              <Button color='secondary' onClick={this.toggleModal}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);