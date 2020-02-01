import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/MainStyles.css'

class Input extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: 'none',
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        if (this.state.visible == 'none') {
            return this.setState({ visible: 'inherit' })
        } else {
            return this.setState({ visible: 'none' })
        }
    }

    render() {
        return (
            <div className="mainSpace">
                <div>
                    <h1
                        className="encabezado"
                        onClick={this.handleOnClick}
                    >INPUTS</h1>
                </div>
                <div style={{ display: this.state.visible }}>
                    <div className="row" >
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4  mainCol">
                            <input className="mainI-1" value="Esto es un texto largo que se pude cortar" type="text" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mainCol">
                            <input className="mainI-2" value="Esto es un texto largo que se pude cortar" type="text" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mainCol">
                            <input className="mainI-3" value="Esto es un texto largo que se pude cortar" type="text" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Input