import { remove } from 'ramda';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart, removeFromCart} from './../../../../actions/cartAction';
import './Item.css';

class Item extends Component {
    constructor(props) {
        super(props);

        this.toggleCart = this.toggleCart.bind(this);
    }

    componentDidMount() {
        let isExists = this.props.cart.filter((item) => item.id === this.props.wine.id);
        if (isExists.length !== 0) {
            const basketBlock = document.getElementsByClassName('cheker');
            [...basketBlock].map(block => {
                console.log(block,'+',block.dataset);
                if (+block.dataset.id === this.props.wine.id) {
                    block.setAttribute('checked', 'checked');
                } 
            })
        }
    }

    toggleCart() {
        let isExists = this.props.cart.filter((item) => item.id === this.props.wine.id);
        if (isExists.length === 0) {
            this.props.addToCart(this.props.wine);
        }
        else {
            this.props.removeFromCart(this.props.wine);
        }
    }

    render() {

        return (
            <li className="item">
            <div className="item_image"><img className="item_image_img" src={this.props.wine.image_url} alt=""/></div>
            <div className="item_title">{this.props.wine.name}</div>
            <div className="item_temp">temperature: {this.props.wine.method.fermentation.temp.value}%</div>
            <div className="item_ph">ph: {this.props.wine.ph}%</div>
            <div className="item_date">date: {this.props.wine.first_brewed}</div>
            <div className="item_volume">volume: {this.props.wine.volume.value}l</div>
            <div className="basket_add">add to basket <input className="cheker" data-id={this.props.wine.id} 
            onClick={this.toggleCart} 
            type="checkbox"/></div>
        </li>
        )
    }
                
};

const mapStateToProps = ({cart}) => ({
    cart: cart.items
});

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addToCart(item)),
    removeFromCart: item => dispatch(removeFromCart(item.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Item);