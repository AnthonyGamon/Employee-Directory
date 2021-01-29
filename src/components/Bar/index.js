import React from "react";
import { Table } from 'reactstrap';
import "./style.css";

const Example = (props) =>{
    return (
<Table>
    <thead>
          <tr>
            <td> </td>
            <th id="firstname">First Name</th>
            <th id="lastname">Last Name</th>
            <th id="email">Email</th>
            <th id="sneakerbrand">Favorite Sneaker Brand</th>
          </tr>
        </thead>
</Table>
    )
}

export default Example;