import React from "react";
import { Table } from 'reactstrap';
import "./style.css";

const Example = (props) => {
    return (
      <Table dark>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>{props.first}</td>
            <td>{props.last}</td>
            <td>{props.email}</td>
            <td>{props.brand}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default Example;