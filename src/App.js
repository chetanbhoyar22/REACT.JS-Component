import About from './Components/About.js';
import MyInformation from './Components/Screen/MyInformation.js'


function App() {
  return (
    <div>
      <h2>Ins Tag (Using className) -</h2>
      <About></About>
      <About></About>

      <br></br>
      
      <h2>Using Props -</h2>
      <MyInformation name="Anuj" age="20" no="9934567890"></MyInformation>
      <MyInformation name="Bipin" age="21"no="934567890"></MyInformation>
      
      <br></br>
      <h2>Using Props Children -</h2>
      <MyInformation name="Ajay" age="22" no="9134567890"><b>Using Props Children</b></MyInformation>
    </div>
  );
}

export default App;
