import React from "react";

import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";
import { VALIDATOR_REQUIRE } from "../../shared/components/util/validator";

const NewPlace = () => {
    return (
        <form className="place-form">
            <Input 
            element="input" 
            type="text" 
            label="Title" 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText="Please enter a valid title"/>
        </form>
    )
}

export default NewPlace