import styled from "styled-components";

export const Gutter = styled.div`
   &.grid {
      display: flex;
   }

   .gutters {
      margin: -10px 0 10px -10px;
   }

   &.gutters > .cell {
      padding: 10px 0 0 10px;
   }

   .cell {
      flex: 1;
   }

   .cell > div {
      background-color: rgba(255, 255, 255, 0.7);
      height: 100%;
      padding: 10px;
   }

   .large {
      flex-grow: 3;
   }
`;