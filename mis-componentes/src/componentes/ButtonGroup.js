import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class ButtonGroup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: 'none',
            transform: 'rotate(90deg)',
            right: '20px',
            top: '14px'
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        if (this.state.visible === 'none') {
            this.setState({ visible: 'initial' })
            this.setState({ transform: 'rotate(0deg)' })
            this.setState({ right: '55px' })
            this.setState({ top: '0px' })

        } else {
            this.setState({ visible: 'none' })
            this.setState({ transform: 'rotate(90deg)' })
            this.setState({ right: '20px' })
            this.setState({ top: '14px' })
        }
        return this.state
    }

    render() {
        return (
            <div className="mainSpace">
                <div>
                    <h1
                        className="encabezado"
                        onClick={this.handleOnClick}
                    >BUTTON GROUPS
                    <label
                            className="dibujo dropdown-toggle"
                            style={{
                                transform: this.state.transform,
                                right: this.state.right,
                                top: this.state.top
                            }}
                        ></label></h1>
                </div>
                <div style={{ display: this.state.visible }}>
                    <div className="row" >
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mainCol">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-1-1">Left</button>
                                <button type="button" class="btn btn-1-2">Middle</button>
                                <button type="button" class="btn btn-1-3">Right</button>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mainCol">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-2-1">Left</button>
                                <button type="button" class="btn btn-2-2">Middle-1</button>
                                <button type="button" class="btn btn-2-2">Middle-2</button>
                                <button type="button" class="btn btn-2-3">Right</button>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mainCol">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-3-1">Left</button>
                                <button type="button" class="btn btn-3-2">Middle</button>
                                <button type="button" class="btn btn-3-3">Right</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ButtonGroup