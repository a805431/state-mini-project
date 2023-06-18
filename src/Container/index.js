import { Gutter } from "./main.css";

function Container() {
   return (
      <>
         <Gutter className="grid gutters">
            <div className="cell">
               <div>
                  Quis duis officia nostrud ullamco elit Lorem velit esse consequat magna ut cupidatat mollit.
               </div>
            </div>
            <div className="cell">
               <div>
                  Quis duis officia nostrud ullamco elit Lorem velit
               </div>
            </div>
            <div className="cell">
               <div>
                  Quis duis officia nostrud ullamco elit Lorem velit esse consequat magna ut cupidatat mollit.
               </div>
            </div>
         </Gutter>
         <Gutter className="grid gutters">
            <div className="cell large">
               <div>
                  Quis duis officia nostrud ullamco elit Lorem velit esse consequat magna ut cupidatat mollit.
               </div>
            </div>
            <div className="cell">
               <div>
                  Quis duis officia nostrud ullamco elit Lorem velit
               </div>
            </div>
         </Gutter>
         <Gutter className="grid gutters">
            <div className="cell">
               <div>
                  Quis duis officia nostrud ullamco elit Lorem velit esse consequat magna ut cupidatat mollit.
               </div>
            </div>
            <div className="cell">
               <div>
                  Quis duis officia nostrud ullamco elit Lorem velit
               </div>
            </div>
            <div className="cell">
               <div>
                  Quis duis officia nostrud ullamco elit Lorem velit esse consequat magna ut cupidatat mollit.
               </div>
            </div>
            <div className="cell">
               <div>
                  Quis duis officia nostrud ullamco elit Lorem velit
               </div>
            </div>
         </Gutter>
      </>
   );
}
export default Container;