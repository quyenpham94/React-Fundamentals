import './App.css';
import Timer from './Timer';
import  Counter from "./Counter";
import ProfileViewer from "./ProfileViewer";
import ProfileViewerWithSearch from './ProfileViewerWithSearch';

function App() {
  return (
    <div className="App">
      <Counter />
      <Timer />
      <ProfileViewer name="elie" color="teal"/>
      <ProfileViewer name="quyen" color="pink" />
      <ProfileViewerWithSearch />
    </div>
  );
}

export default App;
