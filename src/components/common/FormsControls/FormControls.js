import {Field} from "redux-form";
import React from "react";

export const CreatField = (placeholder, name, component) => (
    <div>
        <Field placeholder={placeholder} name={name} component={component}/>
    </div>
)