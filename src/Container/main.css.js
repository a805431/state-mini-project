import styled from "styled-components";

export const StyledUl = styled.ul`
   &.vcenter{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 150px;
      border: 1px solid white;
   }

   p {
      margin: 0;
   }

   li{
      list-style-type: none;
      flex-basis: 25%;
   }

`;

export const StyledNav = styled.nav`
   width: 400px;
`;