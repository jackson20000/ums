import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

const List = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/api/users')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setUsers(json);
            })
            .catch(() => {
                console.log('err occured');
            })
    },[]);
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
                    {users.map(res => 
                        <tr key={res.id}>
                            <td>{res.id}</td>
                            <td>{res.fname+' '+res.lname}</td>
                            <td>{res.username}</td>
                            <td>{new Date(res.dob||'').toLocaleDateString("en-US")}</td>
                            <td><Link to={'/users/'+res.id}><button className="waves-effect waves-light btn-small">view</button></Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List;