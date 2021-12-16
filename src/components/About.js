import React from 'react'

export default function About(props) {
    const myStyle = {
        color : props.mode === 'light'? '#3B3C36' : 'white',
        backgroundColor : props.mode === 'light'? 'white' : '#3B3C36'
    }
    return (
        <div>
            <ul className="list-group list-group-flush" style={myStyle}>
                <li className="list-group-item" style={myStyle}>An item</li>
                <li className="list-group-item" style={myStyle}>A second item</li>
                <li className="list-group-item" style={myStyle}>A third item</li>
                <li className="list-group-item" style={myStyle}>A fourth item</li>
                <li className="list-group-item" style={myStyle}>And a fifth one</li>
            </ul>
        </div>
    )
}
