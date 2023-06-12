import { createGlobalStyle } from "styled-components";
//base.css
const GlobalStyle = createGlobalStyle`
* {
   color: #fff;
   text-shadow: 1px 1px 0 #000;
   box-sizing: border-box;
   font-family: Ubuntu, sans-serif;
 }
 
 html {
   background: -webkit-linear-gradient(100deg, #772953, #e95420);
   background: linear-gradient(-10deg, #772953, #e95420);
   min-height: 100vh;
   font-size: 18px;
 }
 
 code {
   margin: 1px 5px;
   padding: 2px 5px 1px 5px;
   font-family: monospace;
   border-radius: 2px;
   border: 1px dotted #fff;
 }
 
 p {
   margin: 25px 10px 5px 10px;
 }
 
 h2 {
   text-align: center;
   margin-top: 50px;
 }
 
 a {
   text-decoration: none;
 }
 
 a:hover {
   text-decoration: underline;
 }
 
 .outlined {
   width: 500px;
   height: 200px;
   border: 1px solid #fff;
   margin-bottom: 50px;
 }
 
 .container > * {
   color: #fff;
   background-color: rgba(255, 255, 255, 0.15);
   border: 1px solid #fff;
   border-radius: 2px;
   padding: 20px;
   margin: 10px;
   -webkit-box-pack: justify;
       -ms-flex-pack: justify;
           justify-content: space-between;
   text-align: center;
 }
 
 .container > div:hover {
   background-color: rgba(255, 255, 255, 0.25);
 }
 
 .full {
   -webkit-box-flex: 0;
       -ms-flex: 0 1 100%;
           flex: 0 1 100%;
 }
 
 .half {
   -webkit-box-flex: 0;
       -ms-flex: 0 2 calc(50% - 20px);
           flex: 0 2 calc(50% - 20px);
 }
 
 .third {
   -webkit-box-flex: 0;
       -ms-flex: 0 1 calc(33.333333% - 20px);
           flex: 0 1 calc(33.333333% - 20px);
 }
 
 .fourth {
   -webkit-box-flex: 0;
       -ms-flex: 0 1 calc(25% - 20px);
           flex: 0 1 calc(25% - 20px);
 }
 
 .fifth {
   -webkit-box-flex: 0;
       -ms-flex: 0 1 calc(20% - 20px);
           flex: 0 1 calc(20% - 20px);
 }
 
 .sixth {
   -webkit-box-flex: 0;
       -ms-flex: 0 1 calc(16.666666% - 20px);
           flex: 0 1 calc(16.666666% - 20px);
 }`;

export default GlobalStyle;