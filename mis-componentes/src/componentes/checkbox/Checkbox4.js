import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class Checkbox4 extends React.Component {

    render() {
        return (
            <p>
                <input className="input-4" type="checkbox" id="check4" />
                <label className="label-4" for="check4">Checkbox-style-4</label>
            </p>
        )
    }
}

export default Checkbox4