import React from "react";
import styles from "./ControlForms.module.css"

export let Textarea = ({input, meta, ...rest}) => {
    const error= meta.error && meta.touched;
    return (
        <div>
            <div className={styles.formControls + " " + (error ? styles.error : "")}>
                <textarea {...input} {...rest}/>
            </div>

            {error && <span>{meta.error}</span>}

        </div>
    )
}

export let Input = ({input, meta, ...rest}) => {
    const error= meta.error && meta.touched;
    return (
        <div>
            <div className={styles.formControls + " " + (error ? styles.error : "")}>
                <input {...input} {...rest}/>
            </div>

            {error && <span>{meta.error}</span>}

        </div>
    )
}