import React from 'react';
import StyledCar from './styled/car'

export default class Carro extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        const { tiempo, altura, car } = this.props
        
        return (
            <div>
                <StyledCar 
                    tiempo={tiempo}
                    altura={altura} 
                    src={car}/>
            </div>
        )
    }
}