import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';
import classes from './item.module.css';

function Item(props) {
    let wine = useSelector(({wines}) => {
        return wines.items.filter(wine => {
            return wine.id === +props.match.params.id;
        })
    });

    return (
        <div className={classes.item_wrap}>
            <div className={classes.home_link}><NavLink to='/'>to home</NavLink></div>
            {wine.map((wine, key) => {
            return (
                <div className={classes.display_wrap} key={key}>
                    <div className={classes.item_image}><img className={classes.item_image_img} src={wine.image_url} alt=""/></div>
                    <div>
                        <div className={classes.item_title}>{wine.name}</div>
                        <div className={classes.item_temp}>temperature: {wine.method.fermentation.temp.value}%</div>
                        <div className={classes.item_ph}>ph: {wine.ph}%</div>
                        <div className={classes.item_date}>date: {wine.first_brewed}</div>
                        <div className={classes.item_volume}>volume: {wine.volume.value}l</div>
                    </div>
                </div>)
            })
            }
        </div>
    )
}

export default Item;