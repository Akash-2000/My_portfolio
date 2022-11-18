import Topbar from "./componenets/topbar/topbar";
import Intro from "./componenets/intro/intro";
import Portfolio from "./componenets/portfolio/portfolio";
import Works from "./componenets/works/works";
import Testimonials from "./componenets/testimonials/testimonials";
import Contact from "./componenets/contact/contatct";
import Menu from "./componenets/menu/menu";
import About from "./componenets/About/about";
import Skills from "./componenets/skills/skills";
import Achievemnts from "./componenets/Achievements/Achievemnts";
import "./app.scss"
import { useState } from "react";
function App() {
  const [menuOpen,setmenuopen]=useState(false)

  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setmenuopen={setmenuopen}/>
     <Menu menuOpen={menuOpen} setmenuopen={setmenuopen}/>
     <div className="sections">
      <Intro/>
      <About/>
      <Works/>
      <Skills/>
      <Achievemnts/>
      <Contact/>
     </div>
   </div>
  );
}

export default App;
