import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import classes from './basket.module.css';
import Item from './../shop/items/item/Item';

class Basket extends Component {

    render() {
        return (
            <div className={classes.link_home}>
                <NavLink to="/">to home</NavLink>
                <div className={classes.basket_wrap}>
                    {this.props.cart.map((cart, index) => <Item wine={cart} key={index}/>)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({cart}) => ({
    cart: cart.items
  });

export default connect(mapStateToProps)(Basket);