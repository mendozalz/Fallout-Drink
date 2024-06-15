import Content from "./components/Content"
import Scene from "./components/Scene";

function App() {
  return (
    <div id="bg_container" className="container">
      <Content/>
      <Scene/>
      <img style={{width:"50px", height:"auto", margin:"30px"}} src="./LENIN.jpg"/>
      <div className="scroll"><img style={{background:"#c4c4c44b", borderRadius: "50%", width:"50px", height:"auto"}} src="./scroll_down.gif" /></div>
    </div>
  );
}

export default App;
