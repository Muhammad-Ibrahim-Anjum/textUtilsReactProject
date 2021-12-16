import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: '80px'}}>
            {props.alert && <div style={{width:"60%", margin: "0 auto", 'text-align': "center","z-index": "1000"}} class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong><br/>
                {props.alert.mesg}
            </div>}
        </div>
    )
}

export default Alert
