import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

const navigation = ( // Currently Unused
    <ul>
        <li><IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink></li>
        <li><Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link></li>
    </ul>
)

export const PageLayout = ({ children }) => (
    <div className='container text-center'>
        <h1>Strangeloop Redux Demo 2017</h1>
        <div className='page-layout__viewport'>
            {children}
        </div>
    </div>
)
PageLayout.propTypes = {
    children: PropTypes.node,
}

export default PageLayout
