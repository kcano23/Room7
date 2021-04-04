import React from 'react';

const Input = (props) => {
    const {name,type,value,changeHandler,error,label,submitValue} = props;


    return (
        type !=="submit" ?
            <div className="form-group">
                <label>{label}</label>
                <input className="form-control"
                type={type}
                value={value}
                name={name}
                onChange={changeHandler}
                />
                <span className="text-danger">{error ? error.message: ""}</span>
            </div>
            :
            <input type="submit"className="btn btn-primary" value={submitValue}/>
        
    );
};


export default Input;