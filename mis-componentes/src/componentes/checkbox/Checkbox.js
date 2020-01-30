import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './checkbox.css'

//componentes
import Checkbox1 from './Checkbox1'
import Checkbox2 from './Checkbox2'
import Checkbox3 from './Checkbox3'
import Checkbox4 from './Checkbox4'

class Checkbox extends React.Component {

    render() {
        return (
            <div className="mainSpace">
                <div>
                    <h1 className="encabezado">CHECKBOX</h1>
                </div>
                <div className=" row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mainCol">
                        <Checkbox1/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mainCol">
                        <Checkbox2/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mainCol">
                        <Checkbox3/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mainCol">
                        <Checkbox4/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkbox