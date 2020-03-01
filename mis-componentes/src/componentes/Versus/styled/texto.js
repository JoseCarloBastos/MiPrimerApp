import styled from 'styled-components';

const StyledText = styled.h3`
    display: inline;

    ${props => {
        if (props.text1) {
            return `color: red;`;
        }
        return `color: blue;`;
    }}
`

export default StyledText;
