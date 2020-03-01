import styled from 'styled-components';
import { COLOR_PRIMARY, COLOR_SECUNDARY, COLOR_SHADOW } from '../../../Colores/colores';

const StyledMapa = styled.div`
    border: 2px solid ${COLOR_SECUNDARY};
    border-radius: 8px;
    display: inline-block;
    margin: 10px;

    > h3 {
        color: ${COLOR_SECUNDARY};
    }

    > img {
        width: 200px; height: 150px;
        margin-right: 5px;
        border: 1px solid black;
        border-radius: 8px 0 0 8px;
    }

    &:hover > h3 {
        color: white;
    }

    &:hover > img {
        background: white;
    }

    &:hover {
        box-shadow: 0 0 15px ${COLOR_SHADOW};
        background: ${COLOR_PRIMARY};
    }
`

export default StyledMapa