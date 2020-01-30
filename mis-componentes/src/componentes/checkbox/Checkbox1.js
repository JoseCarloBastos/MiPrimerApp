import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './cbstyle1.css'

class Checkbox1 extends React.Component {

    render() {
        return (
            <p>
                <input className="input-1" type="checkbox" id="check1" />
                <label className="label-1" for="check1">Checkbox-style-1</label>
            </p>
        )
    }
}

export default Checkbox1