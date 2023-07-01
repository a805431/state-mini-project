import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  #main {
    display: flex;
    flex-grow: 1;
  }

  #content {
    flex: 4 1 0%;
  }

  #secondary {
    // flex-basis: 200px;
    flex: 1 1 0%;
    order: -1;
  }

  #tertiary {
    flex: 1 1 0%;
    // flex-basis: 150px;
  }

  #header, #footer {
    text-align: center;
    padding: 20px;
  }

  #main * {
    padding: 20px;
  }
`;