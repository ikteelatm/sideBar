import React, {Component } from 'react';
import {SIDEBAR_ACTIONS} from '../Constants/Constants';
import refresh from '../../icons/refresh.png';
import cancel from '../../icons/cancel.png';
import ascToggle from '../../icons/upToggle.png';
import descToggle from '../../icons/downToggle.png';
import './Header.css';

class Header extends Component {
    /**
     * When there is a search term to handle, run the callback to search a report by name
     * @param e
     */
    setSearchTerm = e => {
        this.props.onSearchReport(this.props.reports, e.target.value);
        e.preventDefault();
    };

    /**
     *  run the callback to for sortBy
     */
    handleSort = () => {
        this.props.onSortBy(this.props.searchResultItems.length > 0 ? this.props.searchResultItems
            : this.props.reports);
    };


    /**
     * Used to handle closing the side panel
     * @param action
     */
    closeSideBar = (action) => {
      this.props.handleCloseSideBar(action);
    };

    /**
     * Refresh side panel when header refresh button been clicked
     */
    callRefreshSideBar = () => {
        this.props.handleRefreshSideBar();
    };

    render () {
        return (
            <div className='header'>
                <div className='title_and_actions'>
                    <h4 className='reports_header'> Reports  {this.props.reports.length} </h4>
                    <div className='header_buttons' align="right">
                        <button className='refresh' onClick={() => this.callRefreshSideBar()}>
                            <img src={refresh} width="15" height="15"
                                 className="" alt="refresh"/>
                        </button>
                        <button className='cancel' onClick={() => this.closeSideBar(SIDEBAR_ACTIONS.CLOSE)}>
                            <img src={cancel} width="15" height="15"
                                 className="" alt="cancel"/>
                        </button>
                    </div>
                </div>
                <div className='search_sort'>
                    <div className="search">
                        <input onChange={this.setSearchTerm} type="text"
                               className="form-control" placeholder="search reports"/>
                    </div>
                    <div className="toggle_sort">
                        <div className="toggle">
                            <button className="asc_toggle" onClick={() => this.handleSort()}>
                                <img src={ascToggle} width="25" height="23"
                                     className="" alt="refresh"/>
                            </button>
                            <button className="desc_toggle" onClick={() => this.handleSort()}>
                                <img src={descToggle} width="10" height="15"
                                     className="" alt="refresh"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;