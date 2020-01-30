import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/MainStyles.css'

class Button extends React.Component {

    render() {
        return (
            <div className="mainSpace">
                <div>
                    <h1>BUTTONS</h1>
                </div>
                <div className=" row">
                    <div className="col mainCol">
                        <button className="mainB-1">Button-Style-1</button>
                    </div>
                    <div className="col mainCol">
                        <button className="mainB-2">Button-Style-2</button>
                    </div>
                    <div className="col mainCol">
                        <button className="mainB-3">Button-Style-3</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Button