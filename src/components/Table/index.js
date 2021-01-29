import React from "react";
import { Table } from 'reactstrap';
import "./style.css";

const Example = (props) => {
    return (
      <Table dark>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td id="firstname">{props.first}</td>
            <td id="lastname">{props.last}</td>
            <td id="email">{props.email}</td>
            <td id="sneakerbrand">{props.brand}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default Example;