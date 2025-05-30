// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

const Button = styled.button`
    background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
    color: ${(props) => (props.$primary ? 'white' : '#BF4F74')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
`;

export { Button };
