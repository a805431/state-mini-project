import { StyledContainer } from "./main.css";

function Container() {
   return (
      <StyledContainer>
         <header id="header">Header</header>
         <main id="main">
            <section id="content">ac ut consequat semper viverra nam libero justo laoreet sit amet cursus
               sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id
               diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum
               nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque
               viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu
               mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis
               viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu</section>
            <aside id="secondary">gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing
               at in tellus integer feugiat
               scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget</aside>
            <aside id="tertiary">nunc lobortis mattis aliquam faucibus purus in massa tempor nec
               feugiat nisl pretium fusce id velit ut tortor pretium viverra</aside>
         </main>
         <footer id="footer">Footer</footer>
      </StyledContainer>
   );
}
export default Container;