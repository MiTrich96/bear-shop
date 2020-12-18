import React, {Component} from 'react';
import './ShopPage.css';
import ListItems from './items/ListItems';
import SortWrap from './sort/sort';
import Pagination from './pagination/pagination';

class ShopPage extends Component {

    render() {
        return (
            <>
            <div className="items_wrap">
                <SortWrap />
                <ListItems />
            </div>
            
            <Pagination />
            </>
        )
    }   
}

export default ShopPage;
    