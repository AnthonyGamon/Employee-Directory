import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
const Example = (props) => {
    return (
        <div>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Search</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Sneaker Brands" />
            </InputGroup>
        </div>
    )
};
export default Example;