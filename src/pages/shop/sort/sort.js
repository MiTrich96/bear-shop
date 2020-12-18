import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setFilter} from './../../../actions/filterAction';
import './sort.css';

class SortWrap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="items_sort">
                    <div className="sort_title">Sort by</div>

                    <div className="sort_block">
                        
                        <button className="button more" onClick={e =>this.props.setFilter(e.target.innerHTML)}>All</button>
                    </div>
                    
                    <div className="sort_block">
                        
                        <button className="button more" onClick={e =>this.props.setFilter(e.target.innerHTML)}>Temperature less 18%</button>
                    </div>
                    
                    <div className="sort_block">
                        
                        <button className="button more" onClick={e =>this.props.setFilter(e.target.innerHTML)}>Temperature more 18%</button>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = ( filter ) => ({
    filterBy: filter.filterBy
});

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(SortWrap);