import React from 'react';
import StyledText from './styled/texto'

export default class Versus extends React.Component {

    render(){
        const { competidor1, competidor2} = this.props
        return(
            <div>
                <StyledText text1>{competidor1} V</StyledText>
                <StyledText >S {competidor2} </StyledText>
            </div>
        )
    }
}