import React, { Component } from 'react';
import DISHES from '../../data/dishes/dishes';
import MenuItem from './MenuItem';

class Menu extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null
  }


  onDishSelect = dish => {
    console.log(dish);
    this.setState({ selectedDish: dish })
  }

  render() {
    const menu = this.state.dishes.map(item => {
      return (
        <MenuItem
          dish={item}
          key={item.id}
          onDishSelect={() => this.onDishSelect(item)}>
        </MenuItem>
      )
    })
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            {menu}


          </div>
        </div>
      </div>
    );
  }
};

export default Menu;