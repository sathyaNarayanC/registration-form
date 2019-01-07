import React, { Component } from 'react';
import axios from 'axios'

class AddEditUser extends Component {


  handleSubmit = event => {
    event.preventDefault();

    var uid = document.getElementById("uid").value
    var uname = document.getElementById("username").value;
    var upass = document.getElementById("password").value;

    var obj = {};
    obj["uid"] = uid;
    obj.uname = uname;
    obj.upass = upass;  

    var dbParam = JSON.parse(JSON.stringify(obj));


    axios.post(`http://localhost:8000/emp`, dbParam )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

    render() {
        return (
          <div className="user-add-edit">
          <form className = "form" onSubmit={this.handleSubmit}>
                User ID:  <input type = "text" name= "uid" id= "uid" /><br/><br/>
                UserName: <input type = "text" name= "uname" id= "username" /><br/><br/>
                Password: <input type = "text" name= "upass" id= "password" /><br/><br/>
                <button type="submit">Submit</button>  
                </form>
             </div>
        );
      }
}

export default AddEditUser;
