import React from 'react'
import StyledCarretera from './styled/carretera'

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
            </div>

        )
    }
}