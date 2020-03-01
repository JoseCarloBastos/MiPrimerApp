import styled from 'styled-components';
import { COLOR_SECUNDARY, COLOR_DARK, COLOR_SHADOW, COLOR_PRIMARY } from '../../../Colores/colores';

const StyledCard = styled.div`
    width: 200px; height: 200px;
    border: 2px solid ${COLOR_SECUNDARY};
    border-radius: 8px;
    margin: 10px;
    display: inline-block;
    padding: 2px;

    > h4 {
        color: ${COLOR_SECUNDARY};
    }

    > p {
        color: ${COLOR_DARK};
    }

    &:hover > h4, &:hover > p {
        color: white;
    }

    &:hover {
        box-shadow: 0 0 15px ${COLOR_SHADOW};
        background: ${COLOR_PRIMARY};
    }
`

export default StyledCard;