import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    render() {
        //Destructing
        const {name, department, salary} = this.props
        return (
            <div className="col-md-8 mb-4" >
               <div className="card">
                   <div className="card-header d-flex justify-content-between">
                        <h4 className= "d-inline">{name}</h4>
                        <i className="fa fa-trash-o" style={{cursor: "pointer"}}></i>
                   </div>
                   <div className="card-body">
                       <p className="card-text">Department: {department}</p>
                       <p className="card-text">Salary: {salary}</p>
                   </div>
                    
               </div>
            </div>
        )
    }
}

export default User;

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary :  PropTypes.string.isRequired,
    department : PropTypes.string.isRequired
}

User.defaultProps = {
    name : "bilgi yok",
    department : "bilgi yok",
    salary : "bilgi yok"
}