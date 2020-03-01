import React from 'react';
import StyledCarretera from './styled/carretera';
import StyledLinea from './styled/linea';
import linea from '../../img/linea.png';

export default class Carretera extends React.Component {

    render() {
        const { road } = this.props
        return (
            <div style={{margin: "20px", background: "green"}}>
                <StyledCarretera src={road} />
                <StyledCarretera src={road} />
                <StyledCarretera src={road} />
                <StyledCarretera src={road} />
                <StyledCarretera src={road} />
                <StyledCarretera src={road} />
                <StyledLinea src={linea} />
            </div>
        )
    }
}