import React, {Component} from 'react';
import {connect} from 'react-redux';
import './ListItems.css';
import Item from './item/Item';

class ListItems extends Component {

    render() {
        return (
            <div className="items_inner">
                <ul className="list_items"> 
                    {this.props.wines.map((wine, index) => <Item wine={wine} key={index}/>)}
                </ul>
            </div>
       )
    }
} 

const mapStateToProps = ({wines, filter}) => ({    
    wines:  wines.items
            .filter((wine) => {return wine.name.toLowerCase().includes(filter.searchQuery.toLowerCase())})
            .filter(wine => {
                return filter.filterBy==='All' ? wine : 
                filter.filterBy==='Temperature less 18%' ? wine.method.fermentation.temp.value < 18
                :wine.method.fermentation.temp.value > 18 
            })
  })
  

export default connect(mapStateToProps)(ListItems);