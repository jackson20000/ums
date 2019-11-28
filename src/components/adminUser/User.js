import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { DatePicker } from 'react-materialize';
import auth from '../../services/auth-service';
import {connect} from 'react-redux'
import M from 'materialize-css'

const User = (props) => {
    let { id } = useParams();
    const [users, setUsers] = useState({});
    useEffect(() => {
        fetch(`http://localhost:4000/api/users/${id}`)
            .then(response => response.json())
            .then(json => {
                const {username, id, type, fname, lname,dob} = json[0];
                setUsers({username, id, type, fname, lname, dob});
                M.updateTextFields();
            })
            .catch(() => {
                console.log('err occured');
            })
    }, []);
    let elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {default: "3"});

    var options = {
        defaultDate: new Date(users.dob),
        setDefaultDate: true,
        onSelect: (val)=>{
            setUsers({
                ...users,
                dob: val
              })
        }
    };
    var datepicker = document.querySelector('.datepicker');
    var instance = M.Datepicker.init(datepicker, options);

    const handleSubmit = (e)=>{
        e.preventDefault();
        auth.UpdateUser(users,id)
        .then((res)=>{
            console.log(users);
            console.log(res);
        })
        .catch(err=>{
            console.log(err)
        })
    }

     const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name,value);
        setUsers({
          ...users,
          [name]: value
        });
      }

    return (
        <div className="container">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" placeholder="First name" name="fname" defaultValue={users.fname} type="text" className="validate"
                        onChange={(e)=> {handleInputChange(e)}}
                        />
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" name="lname" placeholder="Last name"
                        defaultValue={users.lname} className="validate" onInput={(e)=> {handleInputChange(e)}}/>
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input disabled placeholder="Username" name="username" id="disabled" 
                        defaultValue={users.username} type="text" className="validate"/>
                        <label htmlFor="disabled">Username</label>
                    </div>
                </div>
                <div className="row">
                        <DatePicker
                            label="Date of Birth"
                            id="myDate"
                            className="datepicker"
                            name="dob"
                        />
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <select defaultValue={users.type} name="type" onChange={(e)=> {handleInputChange(e)}}>
                            <option value="" disabled>Choose your option</option>
                            <option value="1" >Viewer</option>
                            <option value="2">Manager</option>
                            <option value="3">Developer</option>
                            <option value="4">Tester</option>
                        </select>
                        <label>Select User type</label>
                    </div>
                </div>
                <button onClick={(e)=> handleSubmit(e)} className="waves-effect waves-light btn">Save</button>
            </form>
        </div>
    )
}
const mapStateToProps = state => ({
    state: state
});

export default connect(mapStateToProps)(User);
