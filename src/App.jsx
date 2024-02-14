
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import DisplayCounter from "./components/Displaycounter";
import Container from "./components/Container";
import Controls from "./components/controls";
import { useSelector } from "react-redux";
import PrivacyToggle from "./components/privacymsg";
function App() {
   
   const privacy= useSelector(store => store.privacy);

  return (
  
      <div className="px-4 py-5 my-5 text-center  ">
        <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyToggle/> :<DisplayCounter/>}
          <Controls></Controls>
        </div>
        </Container>
      </div>
    
  );
}

export default App;
