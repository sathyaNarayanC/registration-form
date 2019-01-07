import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ShowUsers extends Component {

  constructor(props) {
    super(props);
    this.state = {users: []} ;
    this.myRef = React.createRef();
    this.myEditRef = React.createRef();

  }
  data = {
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Headers' : "Origin",
    'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'test',
		'X-Test': 'testing'
  }

  componentWillMount() {
    axios.get(`http://localhost:8000/show`,this.data).then(res => {
        const users = res;
        console.log(res);
        this.setState({ users: users.data });
        console.dir(this.state);
        console.log(this.state);
      }).catch(function(error){
        console.log(error);
      })
  }

  deleteHandler(){
    var id = parseInt(this.myRef.current.id);
    var url = 'http://localhost:8000/delete/'+id;
    axios.delete(url);
  }

  editHandler(){
    var id = parseInt(this.myRef.current.id);
    var url = 'http://localhost:8000/update/'+id;
    axios.update(url);
  }

  render() {
    return (
      <div className="user-details">
        <header className="user-header">
         <div>
         <table id="showtable" border="2">  
            <thead>  
                <tr>
                    <th>user ID</th>
                    <th>User Name</th>  
                    <th>Password</th>  
                    <th>Actions</th> 
                </tr>  
         </thead>  
         <tbody>
         {this.state.users.map(el => (
          <tr><td>{el.uid}</td><td>{el.uname}</td><td>{el.upass}</td><td> <input type="button" ref={this.myEditRef} id={"edit"+el.id} value="Edit" onClick={(e)=>this.editHandler(e)} /> <input type="button"  id={el.id} ref={this.myRef} value="delete" onClick={(e)=>this.deleteHandler(e)} /></td></tr>
         ))}
         </tbody>
         </table><br/><br/>
         <Link to="/add"><input type="button" value="Add User"/></Link>
         </div>
        </header>
      </div>
    );
  }
}

export default ShowUsers;
