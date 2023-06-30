import styled from "styled-components";

export const StyledContainer = styled.div`
  .media {
   display: flex;
   flex-flow: row nowrap;
  }   

  .figure {
   flex: 1 1 40%;
   align-self: flex-start;
   order: 0;
  }

  .media-body {
   flex: 1 1 60%;
  }

  p {
   margin: 0 10px 20px 10px;
  }
`;