import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/MainStyles.css'

class Checkbox extends React.Component {

    render() {
        return (
            <div className="mainSpace">
                <div>
                    <h1>CHECKBOX</h1>
                </div>
                <div className=" row">
                    <div className="col mainCol">
                        <input type="checkbox" className="mainCB-1" name="vehicle3" value="Boat" checked />
                    </div>
                    <div className="col mainCol">
                        <input type="checkbox" className="mainCB" name="vehicle3" value="Boat" checked />
                    </div>
                    <div className="col mainCol">
                        <input type="checkbox" className="mainCB" name="vehicle3" value="Boat" checked />
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkbox