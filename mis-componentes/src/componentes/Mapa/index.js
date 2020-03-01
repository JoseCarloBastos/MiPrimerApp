import React from 'react';
import StyledMapa from './styled/mapa';

export default class Mapa extends React.Component {

    render() {
        const { nombre, img } = this.props
        return(
            <StyledMapa>
                <img alt="" src={img} style={{display: "inline"}}/>
                <h3 style={{display: "inline", margin: "5px"}}>{nombre}</h3>
            </StyledMapa>
        )
    }
}