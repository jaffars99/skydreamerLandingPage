import ColaboratedClient from "./components/ColaboratedClient";
import HeaderLeft from "./components/HeaderLeft";
import HeaderRight from "./components/HeaderRight";
import Footer from "./components/footer";
import MeetTeam from "./components/meetTeam";
import Navbar from "./components/navbar";
import Philosophy from "./components/philosophy";
import ServiceHead from "./components/serviceHead";


function App() {
  return (
  <>
   <Navbar/>
   <div style={{display:"flex"}}>
   <HeaderLeft/>
   <HeaderRight/>
   </div>
   <ServiceHead/>
   <Philosophy/>
   <ColaboratedClient/>
   <MeetTeam/>
   <Footer/>
  </>
  );
}

export default App;
