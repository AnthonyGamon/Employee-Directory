import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Table from "./components/Table";
import employees from "./employees.json";
import Bar from "./components/Bar";
import Search from "./components/Search";


class App extends Component{
  state = {employees};


render() {
  return (
    <Wrapper>
     <Title>Solesiety</Title>
     <Search></Search>
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