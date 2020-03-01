import React from 'react';
import StyledCard from './styled/card';
import StyledFoto from './styled/foto';

export default class Card extends React.Component {

    render(){
        const { nombre, img, caracteristicas } = this.props
        return(
            <StyledCard>
                <h4>{nombre}</h4>
                <StyledFoto src={img}/>
                <p>{caracteristicas}</p>
            </StyledCard>
        )
    }
}