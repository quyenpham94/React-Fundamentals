import './App.css';
import Timer from './Timer';
import  Counter from "./Counter";
import ProfileViewer from "./ProfileViewer";
import ProfileViewerWithSearch from './ProfileViewerWithSearch';
import TimerWrapper from './TimerWrapper';
import Video from './Video';
import Focuser from "./Focuser";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <Timer />
      <ProfileViewer name="elie" color="teal"/>
      <ProfileViewer name="quyen" color="pink" />
      <ProfileViewerWithSearch /> */}
      {/* <TimerWrapper /> */}
      {/* <Video /> */}
      <Focuser />
    </div>
  );
}

export default App;
