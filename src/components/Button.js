import React from "react";

function Button({ children, type, ...rest }) {
    return (
        <button type={type === 'submit' ? 'submit' : 'button'}
        {...rest}>
            {children}
        </button>
    )
}

function SelectButton ({children, ...rest}){
    return (
        <select {...rest}>{children}</select>
    )
}

export default Button;
export {SelectButton};
