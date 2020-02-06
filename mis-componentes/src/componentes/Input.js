import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/MainStyles.css'

class Input extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: 'initial',
            transform: 'rotate(0deg)',
            right: '55px',
            top: '0px',
            form: {
                ancho: '',
                alto: '',
                fondo: '',
                esquinas: '',
                colorborde: '',
                estiloborde: '',
                anchoborde: '',
                colortexto: '',
                tamanoletra: '',
                sombracaja: '',
                textoalineado: '',
                padding: '',
                fuerarango: '',
                textofuerarango: '',
            }
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnClick(event) {
        if (this.state.visible === 'initial') {
            this.setState({ visible: 'none' })
            this.setState({ transform: 'rotate(90deg)' })
            this.setState({ right: '20px' })
            this.setState({ top: '14px' })
        } else {
            this.setState({ visible: 'initial' })
            this.setState({ transform: 'rotate(0deg)' })
            this.setState({ right: '55px' })
            this.setState({ top: '0px' })
        }
        return this.state
    }

    handleOnChange = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return (
            <div className="mainSpace">
                <div>
                    <h1
                        className="encabezado"
                        onClick={this.handleOnClick}
                    >INPUTS
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
                    <div className="row formulario form-group">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <h6>Width</h6>
                            <input
                                type="text"
                                clasName="form-control"
                                placeholder="Width"
                                name="ancho"
                                onChange={this.handleOnChange}
                                value={this.state.form.ancho}
                            ></input>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <h6>Height</h6>
                            <input
                                type="text"
                                clasName="form-control"
                                placeholder="Height"
                                name="alto"
                                onChange={this.handleOnChange}
                                value={this.state.form.alto}
                            ></input>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <h6>Background</h6>
                            <input
                                type="text"
                                clasName="form-control"
                                placeholder="Background"
                                name="fondo"
                                onChange={this.handleOnChange}
                                value={this.state.form.fondo}
                            ></input>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <h6>Border-radius</h6>
                            <input
                                type="text"
                                clasName="form-control"
                                placeholder="Border-radius"
                                name="esquinas"
                                onChange={this.handleOnChange}
                                value={this.state.form.esquinas}
                            ></input>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <h6>Border-color</h6>
                            <input
                                type="text"
                                clasName="form-control"
                                placeholder="Border-color"
                                name="colorborde"
                                onChange={this.handleOnChange}
                                value={this.state.form.colorborde}
                            ></input>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <h6>Border-style</h6>
                            <input
                                type="text"
                                clasName="form-control"
                                placeholder="Border-style"
                                name="estiloborde"
                                onChange={this.handleOnChange}
                                value={this.state.form.estiloborde}
                            ></input>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <h6>Border-width</h6>
                            <input
                                type="text"
                                clasName="form-control"
                                placeholder="Border-width"
                                name="anchoborde"
                                onChange={this.handleOnChange}
                                value={this.state.form.anchoborde}
                            ></input>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <h6>Color</h6>
                            <input
                                type="text"
                                clasName="form-control"
                                placeholder="Color"
                                name="colortexto"
                                onChange={this.handleOnChange}
                                value={this.state.form.colortexto}
                            ></input>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <h6>Font-size</h6>
                            <input
                                type="text"
                                clasName="form-control"
                                placeholder="Font-size"
                                name="tamanoletra"
                                onChange={this.handleOnChange}
                                value={this.state.form.tamanoletra}
                            ></input>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <h6>Box-shadow</h6>
                            <input
                                type="text"
                                clasName="form-control"
                                placeholder="Box-shadow"
                                name="sombracaja"
                                onChange={this.handleOnChange}
                                value={this.state.form.sombracaja}
                            ></input>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <h6>Text-align</h6>
                            <input
                                type="text"
                                clasName="form-control"
                                placeholder="Text-align"
                                name="textoalineado"
                                onChange={this.handleOnChange}
                                value={this.state.form.textoalineado}
                            ></input>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <h6>Padding</h6>
                            <input
                                type="text"
                                clasName="form-control"
                                placeholder="Padding"
                                name="padding"
                                onChange={this.handleOnChange}
                                value={this.state.form.padding}
                            ></input>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <h6>Overflow</h6>
                            <input
                                type="text"
                                clasName="form-control"
                                placeholder="Overflow"
                                name="fuerarango"
                                onChange={this.handleOnChange}
                                value={this.state.form.fuerarango}
                            ></input>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                            <h6>Text-overflow</h6>
                            <input
                                type="text"
                                clasName="form-control"
                                placeholder="Text-Overflow"
                                name="textofuerarango"
                                onChange={this.handleOnChange}
                                value={this.state.form.textofuerarango}
                            ></input>
                        </div>
                    </div>
                    <input
                        className="muestra"
                        style={{
                            width: this.state.form.ancho,
                            height: this.state.form.alto,
                            background: this.state.form.fondo,
                            borderRadius: this.state.form.esquinas,
                            borderColor: this.state.form.colorborde,
                            borderStyle: this.state.form.estiloborde,
                            borderWidth: this.state.form.anchoborde,
                            color: this.state.form.colortexto,
                            fontSize: this.state.form.tamanoletra,
                            boxShadow: this.state.form.sombracaja,
                            textAlign: this.state.form.textoalineado,
                            padding: this.state.form.padding,
                            overflow: this.state.form.fuerarango,
                            textOverflow: this.state.form.textofuerarango,
                        }}
                    ></input>
                </div>
            </div>
        )
    }
}

export default Input