import React from 'react';
import StyledMapa from './styled/mapa';
import StyledFoto from './styled/foto';

export default class Mapa extends React.Component {

    render() {
        const { nombre, img } = this.props
        return(
            <StyledMapa>
                <StyledFoto src={img} style={{display: "inline"}}/>
                <h3 style={{display: "inline", margin: "5px"}}>{nombre}</h3>
            </StyledMapa>
        )
    }
}