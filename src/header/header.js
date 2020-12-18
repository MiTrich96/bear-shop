import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {setSearchQuery} from './../actions/filterAction';

import './header.css';
import Register from './Register/Register';
import basketImage from './../images/basket.png';
import userImage from './../images/user.png';

class Header extends Component {
    constructor(props) {
        super(props);

        this.onClickRegisterHandler = this.onClickRegisterHandler.bind(this);
        window.addEventListener('click', this.onClickOutsideRegisterHandler);
    }

    onClickRegisterHandler(event) {
        const registerBlock = document.querySelector('.Main');
        registerBlock.classList.remove('hide');
        event.stopPropagation();
    }
    
    onClickOutsideRegisterHandler({target}) {
        const registerBlock = document.querySelector('.Main');
        if (!target.classList.contains('register') && (target.classList.contains('close') || !registerBlock.contains(target))) {
            registerBlock.classList.add('hide');
        }
    }

    handleSubmit = (values) => {
        const registerBlock = document.querySelector('.Main');
        registerBlock.classList.add('hide');
        const formBlock = document.querySelector('.form_block');
        formBlock.reset();
    }

    render() {

        return (
                <div className="navbar_wrap">
                    <div className="navbar_search">
                        <input value={this.props.searchQuery} onChange={e => {this.props.setSearchQuery(e.target.value)}} type="text" id="input_search" placeholder="search alhohol" />
                    </div>
                    
                    <div className="navbar_basket"><NavLink to='/basket' className="basket_link"><img src={basketImage} alt="" className="basket_image" /></NavLink></div>
                    
                    <div className="navbar_authorize">
                        <div className="not_authorized">
                            <button className="login button">log in</button>
                            <button className="register button" onClick={this.onClickRegisterHandler}>register</button>    
                        </div>
                        <div className="authorized">
                            <div className="user">
                                <div className="user_image"><img src={userImage} alt="" className="user_image_img" /></div>
                                <div className="user_name">dima</div>
                            </div>
                            <button className="log_out button">log out</button>
                        </div>
                    </div>
                    
                    <div className="Main hide" >
                        <div className="close">Close</div>
                          <Register onSubmit={this.handleSubmit}/>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = ({ wines, filter }) => ({
    searchQuery: filter.searchQuery,
});

const mapDispatchToProps = dispatch => ({
    setSearchQuery: value => dispatch(setSearchQuery(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);