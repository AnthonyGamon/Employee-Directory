import React from "react";
import { Table } from 'reactstrap';
import "./style.css";

const Example = (props) =>{
    return (
<Table>
    <thead>
          <tr>
            <td> </td>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Favorite Sneaker Brand</th>
          </tr>
        </thead>
</Table>
    )
}

export default Example;