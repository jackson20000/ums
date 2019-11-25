import React, { Component} from 'react';
import Header from '../components/header/header';
import Sidemenu from '../components/sidemenu/Sidemenu'

class Home extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Header></Header>
                <Sidemenu></Sidemenu>
            </div>
        )
    }
}
export default Home;

