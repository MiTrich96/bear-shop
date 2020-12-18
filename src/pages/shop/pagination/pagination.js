import React, {Component} from 'react';
import PaginationLink from './paginationLink/paginationLink';
import './pagination.css';

class Pagination extends Component {
    getPagination() {
        return {
            count: [1,2,3,4]
        };
    }

    render() {
        return (
            <div className="pagination_wrap">
                <ul className="pagination_menu">
                    {this.getPagination().count.map((page, index) => <PaginationLink page={page} key={index}/>)}
                </ul>
            </div>
        )
    }
}

export default Pagination;