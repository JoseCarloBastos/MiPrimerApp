import React from 'react';
import StyledPanel from './styled/panel';
import StyledTitulo from './styled/titulo';

export default class Panel extends React.Component {

    render(){
        const { titulo, children } = this.props
        return (
            <StyledPanel>
                <StyledTitulo>{titulo}</StyledTitulo>
                {children}
            </StyledPanel>
        )
    }

}