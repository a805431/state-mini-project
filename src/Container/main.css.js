import styled from "styled-components";

export const Section = styled.section`
   &.container{
      display: flex;
      flex-direction: row;
      border: 1px solid #fff;
      width: 800px;
   }

   &.container div{
      float: right;
      flex: 1 1 20%;
      margin: 0;
   }

   &.container div:nth-child(2) {
      flex-grow: 2;
   }

   &.container div:nth-child(3) {
   }
`;