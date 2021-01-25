import React from "react";
import { Table } from 'reactstrap';
import "./style.css";

const Example = (props) => {
    return (
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Favorite Sneaker Brand</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td></td>
            <td> </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default Example;