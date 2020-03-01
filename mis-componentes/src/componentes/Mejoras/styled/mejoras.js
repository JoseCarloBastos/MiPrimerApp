import styled from 'styled-components';
import { COLOR_PRIMARY, COLOR_SECUNDARY, COLOR_SHADOW } from '../../../Colores/colores';

const StyledMejora = styled.div`
    display: inline-block;
    margin: 10px;
    border: 2px solid ${COLOR_SECUNDARY};
    border-radius: 8px;
    width: 200px; height: 100px;
    padding: 5px;

    > h3 {
        color: ${COLOR_SECUNDARY};
    }

    &:hover > h3 {
        color: white;
    }

    &:hover {
        box-shadow: 0 0 15px ${COLOR_SHADOW};
        background: ${COLOR_PRIMARY};
    }
`

export default StyledMejora