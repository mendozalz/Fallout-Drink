import Content from "./components/Content"
import Scene from "./components/Scene";

function App() {
  return (
    <div id="bg_container" className="container">
      <Content/>
      <Scene/>
      <img style={{width:"50px", height:"auto", margin:"30px"}} src="./LENIN.jpg"/>
      <img style={{position:"absolute", top:"85%", left:"48%", width:"50px", height:"auto", background:"white", borderRadius:"50%"}} src="./scroll_down.gif" />
    </div>
  );
}

export default App;
