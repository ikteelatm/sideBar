import React, { Component } from 'react';
import Report from '../Report/Report';
import './Reports.css';

class Reports extends Component {
    constructor(props) {
        super(props);
        this.reports = props.items;
    }

    /**
     *  Rendering each 'Report'
     * @param item
     * @param key
     * @param reportClickHandler
     * @returns {*}
     */
    itemJsx = (item, key, reportClickHandler) => {
        return (
            <Report item={item} key={key} onItemClick={(item) => reportClickHandler(item)}/>
        );
    };

    render() {
        const items = this.props.searchResultItems.length > 0 ? this.props.searchResultItems : this.props.items;
        this.reports = items.map((item, key) => this.itemJsx(item, key, this.props.onReportClickHandler));
        return (
            <ul className="reports">
                {this.reports}
            </ul>
        );
    }
}

export default Reports;