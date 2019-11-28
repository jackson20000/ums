import React from 'react';
import Header from '../components/header/header';
import Sidemenu from '../components/sidemenu/Sidemenu';
import AdminDashboard from '../components/adminUser/dashboard';
import Userdashboard from '../components/normalUser/dashboard'
import { connect } from 'react-redux';

function Home({ ...props }) {
    const userType = props.state.login.userType;
    return (
        <div>
            <Header></Header>
            <Sidemenu></Sidemenu>
            <div style={{marginLeft: 200+'px'}}>
                {(function () {
                    switch (userType) {
                        case 0:
                            return <AdminDashboard />;
                        case 1:
                            return <Userdashboard />;
                    }
                })()}
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    state: state
});
export default connect(mapStateToProps)(Home);
