import styled from 'styled-components';
import { COLOR_PRIMARY, COLOR_SECUNDARY, COLOR_SHADOW } from '../../../Colores/colores';

const StyledBoton = styled.button`
    width: 100px; height: 50px;
    border: 2px solid ${COLOR_SECUNDARY};
    margin: 10px;
    border-radius: 12px;
    background: ${COLOR_PRIMARY};
    color: white;
    font-size: 20px;

    &:hover {
        box-shadow: 0 0 20px ${COLOR_SHADOW};
        background: ${COLOR_SECUNDARY};
        color: white;
    }
`

export default StyledBoton;