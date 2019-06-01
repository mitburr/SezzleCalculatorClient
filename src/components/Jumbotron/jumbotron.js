import React from 'react'

let Navbar = function(props){


return(

  <div className="row">
    <div className="container-fluid">
      <div className="jumbotron">
        <h5 className="display-3">{props.title}</h5>
        <hr className="my-2"/>
        <p className="lead">{props.lead}</p>
      </div>
    </div>
  </div>

)}

export default Navbar;