import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Table from "./components/Table";
import employees from "./employees.json";
import Bar from "./components/Bar";


class App extends Component{
  state = {employees};


render() {
  return (
    <Wrapper>
     <Title>Solesiety</Title>
     <Bar></Bar>
     {this.state.employees.map((employees) => (
     <Table  
      first={employees.first}
      last={employees.last}
      email={employees.email}
      brand={employees.brand}
     /> 
     ))}
    </Wrapper>
  );
}
};


export default App;