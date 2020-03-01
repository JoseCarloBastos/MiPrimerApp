import React from 'react';
import StyledBoton from './styled/boton';

export default class Boton extends React.Component {

    // constructor(props){
    //     super(props)
    // }

    render(){
        const { text } = this.props
        return(
            <StyledBoton>{text}</StyledBoton>
        )
    }

}