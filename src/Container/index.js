import squirrel from "../img/squirrel.jpg";
import { StyledContainer } from "./main.css";

function Container() {
   return (
      <>
         <StyledContainer>
            <div className="media">
               <img src={squirrel} alt="" className="figure" />
               <div className="media-body">
                  <p>Ad sit irure in eiusmod. Culpa proident cillum
                     velit reprehenderit fugiat fugiat fugiat ut
                     aliquip cillum labore. Do nostrud aliquip
                     officia sint ullamco culpa nulla culpa nisi
                     officia. Aute anim ut adipisicing non nisi.
                     Consectetur laboris id elit tempor anim eu
                     amet esse duis aute occaecat labore. Officia
                     anim amet qui incididunt laborum qui laborum
                     fugiat dolore irure id.
                  </p>
                  <p>Incididunt aliquip consectetur reprehenderit
                     occaecat tempor anim occaecat officia aute laborum
                     quis duis irure aliqua. Cupidatat reprehenderit
                     ipsum amet incididunt cillum irure minim.
                     Enim excepteur mollit nulla id adipisicing
                     velit cupidatat nostrud commodo culpa.
                  </p>
                  <p>Incididunt aliquip consectetur reprehenderit
                     occaecat tempor anim occaecat officia aute laborum
                     quis duis irure aliqua. Cupidatat reprehenderit
                     ipsum amet incididunt cillum irure minim.
                     Enim excepteur mollit nulla id adipisicing
                     velit cupidatat nostrud commodo culpa.
                  </p>
               </div>
            </div>
         </StyledContainer>
      </>
   );
}
export default Container;