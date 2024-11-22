import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">h1</Heading>
        <Heading as="h2">h2</Heading>
        <Heading as="h3">h3</Heading>

        <Button variation="primary" size="small">
          Check in
        </Button>
        <Button variation="secondary" size="medium">
          Check in
        </Button>
        <Button variation="primary" size="large">
          Check in
        </Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}
