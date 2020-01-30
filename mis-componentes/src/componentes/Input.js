import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/MainStyles.css'

class Input extends React.Component {

    render() {
        return (
            <div className="mainSpace">
                <div>
                    <h1>INPUT</h1>
                </div>
                <div className=" row">
                    <div className="col mainCol">
                        <input className="mainI-1" value="Esto es un texto largo que se pude cortar" type="text"/>
                    </div>
                    <div className="col mainCol">
                        <input className="mainI-2" value="Esto es un texto largo que se pude cortar" type="text"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Input