import styled from "styled-components";

export const StyledContainer = styled.div`
  .media {
   display: flex;
   flex-flow: row wrap;
  }   

  .figure {
   flex: 1 1 40%;
   align-self: center;
   order: 1;
  }

  .media-body {
   flex: 1 1 60%;
  }

  p {
   margin: 0 10px 20px 10px;
  }
`;