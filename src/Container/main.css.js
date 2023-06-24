import styled from "styled-components";

export const Vcenter = styled.div`
   &.vcenter {
      display: flex;
      align-items: center;
      // justify-content: center;
      height: 150px;
      border: 1px solid white;
   }

   &.vcenter > * {
      margin: auto;
   }

   p {
      margin: 0;
   }

`;