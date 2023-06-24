import { Gutter } from "./main.css";

function Container() {
   return (
      <>
         <Gutter className="grid gutters">
            <div className="half">
               <div>
                  Est ea esse magna exercitation cupidatat nostrud nostrud est fugiat commodo velit amet.
               </div>
            </div>
            <div className="half">
               <div>
                  Eu Lorem consectetur eu excepteur ipsum proident irure ut nulla anim non reprehenderit dolore laboris.
               </div>
            </div>
         </Gutter>
         <Gutter className="grid gutters">
            <div className="third"><div>Occaecat qui fugiat aliquip ex ullamco culpa ex incididunt et minim reprehenderit.</div>
            </div>
            <div className="third"><div>Consequat nisi laboris cupidatat ad irure</div>
            </div>
            <div className="third"><div>Veniam deserunt veniam ad pariatur officia aliqua enim incididunt nostrud velit Lorem.
               Quis velit officia ullamco id dolor eu consectetur dolore ea.
               Cupidatat ea ad dolore cillum elit cillum duis ullamco voluptate irure eu ad minim aliqua.</div>
            </div>
         </Gutter>
         <Gutter className="grid gutters">
            <div className="sixth">
               <div>Occaecat ad reprehenderit proident minim consequat officia.</div>
            </div>
            <div className="sixth">
               <div>
                  Ipsum aliqua sit tempor sunt id qui sit exercitation elit ea nisi excepteur reprehenderit.
               </div>
            </div>
            <div className="third">
               <div>
                  Ea Lorem laboris proident ipsum ad sint nulla sunt ad tempor quis eu dolor.
               </div>
            </div>
            <div className="third">
               <div>
                  Ea Lorem laboris proident ipsum ad sint nulla sunt ad tempor quis eu dolor.
               </div>
            </div>
         </Gutter>
      </>
   );
}
export default Container;