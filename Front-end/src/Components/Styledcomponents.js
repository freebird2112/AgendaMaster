import styled from 'styled-components';

export const Button = styled.button`
  background: ${props => props.primary ? "primary" : "white"};
  color: ${props => props.primary ? "primary" : "black"};
  text-align: center;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  transition: all .3s ease;
  &:hover {
    background: #dc3540;}
`;

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: white;
`;


/*render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);


// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>
      TEL-335 : AgendaMaster
    </Title>
  </Wrapper>
);*/
