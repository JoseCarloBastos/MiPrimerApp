import React from 'react';
import StyledMejora from './styled/mejoras';

export default class Mejora extends React.Component {

    render() {
        const { nombre, img, efecto } = this.props
        return(
            <StyledMejora>
                <h3>{nombre}</h3>
                <img alt="" src={img}/>
                <p>{efecto}</p>
            </StyledMejora>
        )
    }
}