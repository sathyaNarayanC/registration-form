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

    const obj2 = {
      uid : uid,
      uname : uname,
      upass : upass
    }
    
    //JSON encoded while passing body and handled in backEnd
    axios.post(`http://localhost:8000/emp`, JSON.stringify(obj2))
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
