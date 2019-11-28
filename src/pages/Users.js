import React from 'react';
import Header from '../components/header/header';
import Sidemenu from '../components/sidemenu/Sidemenu';
import List from '../components/user-list/List';

function Users() {
    return (
        <div>
            <Header></Header>
            <Sidemenu></Sidemenu>
            <div style={{marginLeft:200+'px',padding: 20+'px'}}>
                <List></List>
            </div>
        </div>
    )
}
export default Users;