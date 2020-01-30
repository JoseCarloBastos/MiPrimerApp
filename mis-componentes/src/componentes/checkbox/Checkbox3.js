import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './cbstyle3.css'

class Checkbox3 extends React.Component {

    render() {
        return (
            <p>
                <input className="input-3" type="checkbox" id="check3" />
                <label className="label-3" for="check3">Checkbox-style-3</label>
            </p>
        )
    }
}

export default Checkbox3