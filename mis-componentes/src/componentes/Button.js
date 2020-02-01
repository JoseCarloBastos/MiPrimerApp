import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class Button extends React.Component {

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
                    >BUTTONS</h1>
                </div>
                <div style={{ display: this.state.visible }}>
                    <div className="row" >
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mainCol">
                            <button className="mainB-1">Button-Style-1</button>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mainCol">
                            <button className="mainB-2">Button-Style-2</button>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mainCol">
                            <button className="mainB-3">Button-Style-3</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Button