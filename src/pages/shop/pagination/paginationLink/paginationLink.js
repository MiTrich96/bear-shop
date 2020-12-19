import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentPage} from './../../../../actions/getElementsAction';
import './paginationLink.css';
import {winesFetchData as fetchWines} from './../../../../actions/getElementsAction';

class PaginationLink extends Component {
    constructor(props) {
        super(props);

        this.changeDataPerPage = this.changeDataPerPage.bind(this);
    }

    componentDidMount() {
        const paginationBlock = document.getElementsByClassName('pagination_button');
        [...paginationBlock].map(button => {
            button.classList.remove('active_pagination');
            if (+button.dataset.id === this.props.currentPage) {
                button.classList.add('active_pagination');
            }
        });

        this.props.fetchData(`https://api.punkapi.com/v2/beers?page=${this.props.currentPage}&per_page=${this.props.countPerPage}`);
    }

    changeDataPerPage(event) {
        const {target} = event;
        event.preventDefault();
        [...document.getElementsByClassName('pagination_button')].map(block => {
            block.classList.remove('active_pagination');
        });
        target.classList.add('active_pagination');
        this.props.setCurrentPage(+target.innerHTML);      
        setTimeout(()=>{
            this.props.fetchData(`https://api.punkapi.com/v2/beers?page=${this.props.currentPage}&per_page=${this.props.countPerPage}`);},0)
    }

    render() {
        return (
            <li className="pagination_item"><button data-id={this.props.page} className="pagination_button" onClick={this.changeDataPerPage}>{this.props.page}</button></li>
        )
    }
}

const mapStateToProps = ({wines}) => ({
    currentPage: wines.currentPage,
    countPerPage: wines.perPage,
    countPages: wines.countPages
});

const mapDispatchToProps = dispatch => ({
    setCurrentPage: numberPage => dispatch(setCurrentPage(numberPage)),
    fetchData: url => dispatch(fetchWines(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationLink);