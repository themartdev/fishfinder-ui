import styled from "styled-components";
import Body from "./components/Body";
import Header from "./components/Header";

const SSectionOrganizer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  return (
    <SSectionOrganizer>
      <Header />
      <Body style={{ flexGrow: 1 }} />
    </SSectionOrganizer>
  );
}

export default App;
