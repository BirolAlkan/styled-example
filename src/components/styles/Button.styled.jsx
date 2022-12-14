import styled from 'styled-components';

const Button = styled.button`
background: ${({bg}) => bg || "white"};
color: ${({color}) => color || "white"};
border: 1px solid #a62440;
padding: 1rem 1.2rem;
border-radius: 8px;
font-size: 1.1rem;
margin-right: 0.5rem;
margin: 2rem 0.5rem;
cursor: pointer;
&:hover{
    opacity: 0.9;
    transform: scale(0.97);
}

 
`;

export default Button;
