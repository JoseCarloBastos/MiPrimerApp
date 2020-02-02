import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

//componentes
import Checkbox1 from './Checkbox1'
import Checkbox2 from './Checkbox2'
import Checkbox3 from './Checkbox3'
import Checkbox4 from './Checkbox4'

class Checkbox extends React.Component {

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
        if (this.state.visible == 'none') {
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
                    >CHECKBOXS
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
                    <div className=" row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mainCol">
                            <Checkbox1 />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mainCol">
                            <Checkbox2 />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mainCol">
                            <Checkbox3 />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mainCol">
                            <Checkbox4 />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Checkbox