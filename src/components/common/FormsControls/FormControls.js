import {Field} from "redux-form";
import React from "react";
import styles from "../SearchForm/SearchForm.module.css";

export const creatField = (placeholder, name, component) => (
        <Field className={styles.searchInput} placeholder={placeholder} name={name} component={component}/>
)

