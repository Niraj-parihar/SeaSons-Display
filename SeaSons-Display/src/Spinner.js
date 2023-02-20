import React from "react";

const Spinner=(props)=>{
    return (<div className='ui active dimmer'>
         <div className='ui big text loader'>{props.message}</div>
    </div>
    );
}
//default prop incase if i forget to put prop
//this will be a type object
Spinner.defaultProps={
     message:"Loading..."
}

export default Spinner;