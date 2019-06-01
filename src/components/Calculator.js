import React from "react";
import Button from "./button"
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron"
import Math from "./Math";
import "./Utils/APIs";
import APIs from "./Utils/APIs";


class Calculator extends React.Component {
  //state will store the most recent 10 calculations
  //currentCalc is a display state piece that changes as each new character is added
  state = {
    currentCalc : "",
    calculations: []
  }

  componentDidMount(){
    setInterval(() => {
      let tenCalculationsArray = [];
     APIs.fillCalculations().then(allCalcs =>{
      let fullCalculationsArray = allCalcs;
      console.log(fullCalculationsArray)
      let tenObjectsArray = fullCalculationsArray.slice((fullCalculationsArray.length-10))
      tenCalculationsArray = tenObjectsArray.map((currentValue) => {
        return currentValue.Calc + ", ";
      })
      this.setState({calculations : tenCalculationsArray})
    })
  }, 1000);
  }

calculate = () => {
  this.setState({currentCalc : ""})
  let valArr = ["",""];
  let operator = ""
  let valIndex = 0;
  let Output = "";
  let tenCalculationsArray = [];
  for (let i = 0; i < this.state.currentCalc.length; i++){
    if (this.state.currentCalc[i] === "+" || 
    this.state.currentCalc[i] === "-" || 
    this.state.currentCalc[i] ==="*" ||
    this.state.currentCalc[i] === "÷"){
      if (this.state.currentCalc[i-1] === "+" || 
      this.state.currentCalc[i-1] === "-" || 
      this.state.currentCalc[i-1] ==="*" ||
      this.state.currentCalc[i-1] === "÷"){ 

       Output = "ERROR please input only one operator";
       return Output;
      }
      valIndex = 1;
      operator = this.state.currentCalc[i];
    }
    else{
      valArr[valIndex] += this.state.currentCalc[i];
      console.log(valArr);
    }
  }
  Output = Math(parseInt(valArr[0]), parseInt(valArr[1]), operator)
  console.log(Output);
   APIs.addCalculation(Output).then(allCalcs =>{
    let fullCalculationsArray = allCalcs;
    console.log(fullCalculationsArray)
    let tenObjectsArray = fullCalculationsArray.slice((fullCalculationsArray.length-10))
    tenCalculationsArray = tenObjectsArray.map((currentValue) => {
      return currentValue.Calc + ", ";
    })
    this.setState({calculations : tenCalculationsArray})
  });
}
clickFunc = (e) => {
  let operator = e.target.dataset.value
    operator === "=" ? this.setState ({calculations : this.state.calculations.concat(this.calculate())}) : this.setState({ currentCalc : this.state.currentCalc.concat(operator)})

  }


  render() {


    return (
      <Container>
        <div className="mainCalcContainer">
          <Row>
            <Col size="md-5">

              <Jumbotron title= {this.state.currentCalc} lead = {this.state.calculations}></Jumbotron>
              <Button title = "+"  dataValue = "+" click = {this.clickFunc}></Button>
              <Button title="-"dataValue = "-"click = {this.clickFunc}></Button>
              <Button title="*"dataValue = "*"click = {this.clickFunc}></Button>
              <Button title="÷"dataValue = "÷"click = {this.clickFunc}></Button>
              <Button title="="dataValue = "="click = {this.clickFunc}></Button>
            </Col>
          </Row>
          <Row>
            <Col size="md-5">
              <Button title="1"dataValue = "1"click = {this.clickFunc}></Button>
              <Button title="2"dataValue = "2"click = {this.clickFunc}></Button>
              <Button title="3"dataValue = "3"click = {this.clickFunc}></Button>
              <Button title="4"dataValue = "4"click = {this.clickFunc}></Button>
              <Button title="5"dataValue = "5"click = {this.clickFunc}></Button>
            </Col>
          </Row>
          <Row>
            <Col size="md-5">
              <Button title="6"dataValue = "6"click = {this.clickFunc}></Button>
              <Button title="7"dataValue = "7"click = {this.clickFunc}></Button>
              <Button title="8"dataValue = "8"click = {this.clickFunc}></Button>
              <Button title="9"dataValue = "9"click = {this.clickFunc}></Button>
              <Button title="0"dataValue = "0"click = {this.clickFunc}></Button>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }

}

export default Calculator;
