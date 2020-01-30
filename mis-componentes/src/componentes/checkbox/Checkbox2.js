import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './cbstyle2.css'

class Checkbox2 extends React.Component {

    render() {
        return (
            <p>
                <input className="input-2" type="checkbox" id="check2" />
                <label className="label-2" for="check2">Checkbox-style-2</label>
            </p>
        )
    }
}

export default Checkbox2