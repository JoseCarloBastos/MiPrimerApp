import React from 'react'

import Foto from '../img/perfil2.png'

class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: 'initial',
            transform: 'rotate(0deg)',
            right: '55px',
            top: '0px',
            form: {
                cardancho: '300px',
                cardalto: 'max-content',
                cardmargen: '20px 50px',
                cardesquinas: '5px',
                cardbordeestilo: 'solid',
                cardbordecolor: 'lightgray',
                cardbordeancho: '1px',
                cardfondo: 'white',
                cardpadding: '1px',
                cardtextoalineado: 'center',
                h5texto: 'Card title',
                h5tamanoletra: '18px',
                h5colorletra: 'black',
                ptexto: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                ptamanoletra: '14px',
                pcolorletra: 'black',
                buttontexto: 'Go somewhere',
                buttonancho: 'max-content',
                buttonalto: 'max-content',
                buttoncolor: 'black',
                buttonesquinas: '4px',
                buttonbordeestilo: 'solid',
                buttonbordecolor: 'gray',
                buttonbordeancho: '1px',
                buttonfondo: 'white',
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
                    >CARDS
                    <label
                            className="dibujo dropdown-toggle"
                            style={{
                                transform: this.state.transform,
                                right: this.state.right,
                                top: this.state.top
                            }}
                        ></label></h1>
                </div>
                <div
                    style={{
                        display: this.state.visible,
                    }}>
                    <div className="row formulario form-group">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Card-Width</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Width"
                                        name="cardancho"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.cardancho}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Card-Height</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Height"
                                        name="cardalto"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.cardalto}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Card-Margin</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Margin"
                                        name="cardmargen"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.cardmargen}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Card-Border-radius</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Border-radius"
                                        name="cardesquinas"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.cardesquinas}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Card-Border-style</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Border-style"
                                        name="cardbordeestilo"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.cardbordeestilo}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Card-Border-color</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Border-color"
                                        name="cardbordecolor"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.cardbordecolor}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Card-Border-width</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Border-width"
                                        name="cardbordeancho"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.cardbordeancho}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Card-Background</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Background"
                                        name="cardfondo"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.cardfondo}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Card-Padding</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Padding"
                                        name="cardpadding"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.cardpadding}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Card-Text-align</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Text-align"
                                        name="cardtextoalineado"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.cardtextoalineado}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div>
                                <h6>Title-Text</h6>
                                <input
                                    type="text"
                                    clasName="form-control"
                                    placeholder="Text"
                                    name="h5texto"
                                    onChange={this.handleOnChange}
                                    value={this.state.form.h5texto}
                                ></input>
                            </div>
                            <div>
                                <h6>Title-Font-size</h6>
                                <input
                                    type="text"
                                    clasName="form-control"
                                    placeholder="Font-size"
                                    name="h5tamanoletra"
                                    onChange={this.handleOnChange}
                                    value={this.state.form.h5tamanoletra}
                                ></input>
                            </div>
                            <div>
                                <h6>Title-Color</h6>
                                <input
                                    type="text"
                                    clasName="form-control"
                                    placeholder="Color"
                                    name="h5colorletra"
                                    onChange={this.handleOnChange}
                                    value={this.state.form.h5colorletra}
                                ></input>
                            </div>
                            <div>
                                <h6>Paragraph-Text</h6>
                                <input
                                    type="text"
                                    clasName="form-control"
                                    placeholder="Text"
                                    name="ptexto"
                                    onChange={this.handleOnChange}
                                    value={this.state.form.ptexto}
                                ></input>
                            </div>
                            <div>
                                <h6>Paragraph-Font-size</h6>
                                <input
                                    type="text"
                                    clasName="form-control"
                                    placeholder="Font-size"
                                    name="ptamanoletra"
                                    onChange={this.handleOnChange}
                                    value={this.state.form.ptamanoletra}
                                ></input>
                            </div>
                            <div>
                                <h6>Paragraph-Color</h6>
                                <input
                                    type="text"
                                    clasName="form-control"
                                    placeholder="Color"
                                    name="pcolorletra"
                                    onChange={this.handleOnChange}
                                    value={this.state.form.pcolorletra}
                                ></input>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Button-Text</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Text"
                                        name="buttontexto"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.buttontexto}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Button-Width</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Width"
                                        name="buttonancho"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.buttonancho}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Button-Height</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Height"
                                        name="buttonalto"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.buttonalto}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Button-Color</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Color"
                                        name="buttoncolor"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.buttoncolor}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Button-Border-radius</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Border-radius"
                                        name="buttonesquinas"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.buttonesquinas}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Button-Border-style</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Border-style"
                                        name="buttonbordeestilo"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.buttonbordeestilo}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Button-Border-color</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Border-color"
                                        name="buttonbordecolor"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.buttonbordecolor}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Button-Border-width</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Border-width"
                                        name="buttonbordeancho"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.buttonbordeancho}
                                    ></input>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <h6>Button-Background</h6>
                                    <input
                                        type="text"
                                        clasName="form-control"
                                        placeholder="Background"
                                        name="buttonfondo"
                                        onChange={this.handleOnChange}
                                        value={this.state.form.buttonfondo}
                                    ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="muestra"
                        style={{
                            width: this.state.form.cardancho,
                            height: this.state.form.cardalto,
                            margin: this.state.form.cardmargen,
                            borderRadius: this.state.form.cardesquinas,
                            borderStyle: this.state.form.cardbordeestilo,
                            borderColor: this.state.form.cardbordecolor,
                            borderWidth: this.state.form.cardbordeancho,
                            background: this.state.form.cardfondo,
                            padding: this.state.form.cardpadding,
                            textAlign: this.state.form.cardtextoalineado
                        }}>
                        <img class="card-img-top" src={Foto} alt="card" />
                        <div class="card-body">
                            <h5
                                class="card-title"
                                style={{
                                    fontSize: this.state.form.h5tamanoletra,
                                    color: this.state.form.h5colorletra,
                                }}
                            >{this.state.form.h5texto}</h5>
                            <p
                                class="card-text"
                                style={{
                                    fontSize: this.state.form.ptamanoletra,
                                    color: this.state.form.pcolorletra,
                                }}
                            >{this.state.form.ptexto}</p>
                            <button
                                style={{
                                    width: this.state.form.buttonancho,
                                    height: this.state.form.buttonalto,
                                    borderRadius: this.state.form.buttonesquinas,
                                    borderWidth: this.state.form.buttonbordeancho,
                                    borderColor: this.state.form.buttonbordecolor,
                                    borderStyle: this.state.form.buttonbordeestilo,
                                    background: this.state.form.buttonfondo,
                                    color: this.state.form.buttoncolor
                                }}
                            >{this.state.form.buttontexto}</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

}

export default Card