import styled, { keyframes } from 'styled-components'

const movimiento = keyframes`
    0%{
        left: 30px;
        transform: rotate(0deg);
    }
    95%{
        left: 1700px;
        transform: rotate(0deg);
    }
    100%{
        left: 1770px;
        transform: rotate(-45deg);
    }
`

const StyledCar = styled.img`
    width: 50px; height: 30px;
    position: absolute;
    left: 1770px;
    transform: rotate(-45deg);
    top: ${props => props.altura}px;
    background: transparent;
    animation: ${movimiento} ${props => props.tiempo}s linear;
`

export default StyledCar