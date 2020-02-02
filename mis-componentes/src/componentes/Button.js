import React from 'react'

class Button extends React.Component {

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
                    >BUTTONS
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