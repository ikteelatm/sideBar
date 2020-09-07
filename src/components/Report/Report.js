import React, { Component } from 'react';
import {convertDateTime} from '../Utilities/dateTimeUtility';
import location from '../../icons/location.png';
import './Report.css';

class Report extends Component {
    /**
     *  Handling when adding to cart or removing from cart been clicked
     * @param item
     * @param operation
     */
    handleItemClick = (item) => {
        this.props.onItemClick(item);
    };

    calcDateTime = (dateTime) => {
        return convertDateTime(dateTime);
    };

    render() {
        const {item} = this.props;
        const {date,time} = this.calcDateTime(item.updated);

        return (
            <div className='item' onClick={() => this.handleItemClick(item)}>
                <li className='item_first_line'>
                    <span className='name'>{item.name.length > 26 ? item.name.substring(0, 26) + '...' : item.name}</span>
                    <span className='date'>{date}</span>
                </li>
                <li>
                    <span className='type'>{item.type}
                        <img src={location} width="15" height="15"
                             className="" alt="locaiton"/>
                    {item.location}</span>
                    <span className='time'>{time}</span>
                </li>
            </div>);
    }
}

export default Report;