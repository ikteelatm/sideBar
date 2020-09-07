import React, { Component } from 'react';
import Reports from '../Reports/Reports';
import Header from '../Header/Header';
import {getReports} from '../Utilities/SidebarUtilities';
import {SIDEBAR_ACTIONS} from '../Constants/Constants';
import './Sidebar.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: [],
            searchResults: [],
            sortedResult: [],
            isSideBarOpened: true,
            doRefresh: false
        }
    }

    /**
     *  In this stage of the life cycle:
     *      Read the reports from `sidebar.json` by waiting for the asynchronous call.
     *      This asynchronous call simulating a call to server to fetch data, that's why I used it.
     *      (This used to fetch data from DB through call to server side)
     * @returns {Promise<void>}
     */
    async componentDidMount() {
        const reports = await getReports();
        reports.sort((a, b) => b.updated - a.updated);
        this.setState({reports: reports});

    }

    /**
     * preparation to handle 'Add' or 'Remove' report
     * @param item
     */
    onReportClick = (item) => {
        console.log(item.name + ' report been clicked: ');
    };

    /**
     * Sort reports either by Ascending or Descending based on updated time
     * @param reports
     */
    handleSortBy = (reports) => {
        this.setState({reports: reports.reverse()});
    };

    /**
     *  Search report by name
     * @param reports
     * @param searchTerm
     */
    handleReportSearch = (reports, searchTerm) => {
        const searchResults = reports.filter(report =>
            report.name.toLowerCase().includes(searchTerm.toLowerCase()));
        this.setState({searchResults: searchResults});
    };

    toggleSideBar = (action) => {
        this.setState({isSideBarOpened: SIDEBAR_ACTIONS[action]});
    };

    /**
     * Reloading the data again by refreshing the page, this will trigger automatically React life cycle
     * componentDidMount will be called and reports will be reloaded again
     */
    refreshSideBar = () => {
        window.location.reload(false);
    };

    renderSideBar = () => {
        return (
            <div className="sidebar">
                <Header onSearchReport={this.handleReportSearch}
                        handleCloseSideBar={this.toggleSideBar}
                        handleRefreshSideBar={this.refreshSideBar}
                        onSortBy={this.handleSortBy}
                        reports={this.state.reports} searchResultItems={this.state.searchResults}/>
                <Reports onReportClickHandler={this.onReportClick}
                          items={this.state.reports} searchResultItems={this.state.searchResults}/>
            </div>
        );
    };

    /**
     * Used to render simple ui action button to open side panel
     * @returns {*}
     */
    renderOpenSidebar = () => {
        return (
            <button className='open' onClick={() =>  this.setState({isSideBarOpened: true})}>Open SideBar
            </button>
        );
    };

    render() {
        return (
            <div className="main" align="center">
                {this.state.isSideBarOpened ? this.renderSideBar() : this.renderOpenSidebar()}
            </div>
        );
    }
}

export default Sidebar;