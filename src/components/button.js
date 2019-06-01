import React from 'react'


let button = function(props){

    return (<button class="btn btn-primary btn-lg" onClick = {props.click} data-value  = {props.dataValue} id = "calcButton">{props.title}</button>)
}

export default button