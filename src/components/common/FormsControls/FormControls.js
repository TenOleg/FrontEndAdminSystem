import {Field} from "redux-form";
import React from "react";

export const CreatField = (placeholder, username, component) => (
    <div>
        <Field placeholder={placeholder} name={username} component={component}/>
    </div>
)