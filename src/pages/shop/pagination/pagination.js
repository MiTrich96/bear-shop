import React from 'react';
import {useSelector} from 'react-redux';

import {createArray} from './../../../actions/createArray';
import PaginationLink from './paginationLink/paginationLink';
import './pagination.css';

function Pagination() {

    const countPages = useSelector(({wines}) => wines.countPages)

    return (
        <div className="pagination_wrap">
            <ul className="pagination_menu">
                {createArray(countPages).map((page, index) => <PaginationLink page={page} key={index}/>)}
            </ul>
        </div>
    )
}

export default Pagination;