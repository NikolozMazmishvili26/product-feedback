import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *{
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: 'Jost', sans-serif;
    background-color:var(--pale-grayish-blue) ;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* css variables */

  :root{
    --purple-color : #AD1FEA;
    --electric-blue : #4661E6;
    --deep-blue :  #373F68;
    --white-color : #FFFFFF;
    --light-lilac : #F2F4FF;
    --pale-grayish-blue : #F7F8FD;
    --midnight-blue: #3A4374;
    --slate-blue: #647196;
    --orange-color : #F49F85;
    --sky-blue: #62BCFA;
  }

`;

// import pages
import { Suggestions, Roadmap } from "./pages";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Suggestions />}></Route>
          <Route path="/roadmap" element={<Roadmap />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
