import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './checkbox.css'

//componentes
import Checkbox1 from './Checkbox1'
import Checkbox2 from './Checkbox2'
import Checkbox3 from './Checkbox3'

class Checkbox extends React.Component {

    render() {
        return (
            <div className="mainSpace">
                <div>
                    <h1>CHECKBOX</h1>
                </div>
                <div className=" row">
                <div className="col mainCol">
                        <Checkbox1/>
                    </div>
                    <div className="col mainCol">
                        <Checkbox2/>
                    </div>
                    <div className="col mainCol">
                        <Checkbox3/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkbox