import React, { Component } from 'react'

class List extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <table className="highlight responsive-table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Date of Birth</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>$0.87</td>.
                            <td><button>view</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List;