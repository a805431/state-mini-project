import { StyledNav } from "./main.css";
import { StyledUl } from "./main.css";

function Container() {
   return (
      <>
         <StyledNav>
            <StyledUl className="vcenter">
               <li>Home</li>
               <li>Portfolio</li>
               <li>Reviews</li>
               <li>Get in touch</li>
            </StyledUl>
         </StyledNav>
      </>
   );
}
export default Container;