import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleCollapsedNav } from 'actions/index';

import Header from "components/Header/index";
import Sidebar from 'containers/SideNav/index';
import Footer from 'components/Footer';
import SamplePage from './routes/SamplePage';

import { COLLAPSED_DRAWER, FIXED_DRAWER } from 'constants/ActionTypes';

class App extends React.Component {
    onToggleCollapsedNav = (e) => {
        const val = !this.props.navCollapsed;
        this.props.toggleCollapsedNav(val);
    };

    render() {
        const { match, drawerType } = this.props;
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? "fixed-drawer" : drawerType.includes(COLLAPSED_DRAWER) ? "collapsible-drawer" : "mini-drawer";

        return (
            <div className={`app-container ${drawerStyle}`}>

                <Sidebar onToggleCollapsedNav={this.onToggleCollapsedNav.bind(this)}/>

                <div className="app-main-container">
                    <Header drawerType={drawerType} onToggleCollapsedNav={this.onToggleCollapsedNav}/>

                    <main className="app-main-content-wrapper">
                        <div className="app-main-content">
                            <Route path={`${match.url}/sample-page`} component={SamplePage}/>
                        </div>
                    </main>
                    <Footer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ settings }) => {
    const { navCollapsed, drawerType } = settings;
    return { navCollapsed, drawerType }
};
export default withRouter(connect(mapStateToProps, { toggleCollapsedNav })(App));
