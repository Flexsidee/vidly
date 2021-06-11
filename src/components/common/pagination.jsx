import React from 'react';
import _ from 'lodash';

const Pagination = props => {
    const {itemsCount, pageSize, onPageChange, currentPage} = props;

    const pagesCount =Math.ceil( itemsCount / pageSize);
    if(pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    
    return ( 
        <React.Fragment>
        <nav>
            <ul className="pagination justify-content-center">
                {pages.map(page => (<li key={page} className={(page === currentPage) ? 'page-item active' : 'page-item'}>
                                <a className="page-link"
                                onClick={() => onPageChange(page) }>{page}</a>
                                </li>))}
                
            </ul>
        </nav>
    </React.Fragment>
     );
}
 
export default Pagination;