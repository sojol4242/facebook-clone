import './App.css';
import Feeds from './Components/Feeds/Feeds';
import Header from './Components/header/Header';
import Sidebar from './Components/Sidebar/sidebar';
function App() {
  return (
    <>
    <div className="app">
      {/* Header component */}
      <Header/>

        <div className="app_body">
          {/*  sidebar */}
          <Sidebar />
          {/* feed */}
          <Feeds/>
        </div>
    </div>
    </>
  );
}

export default App;
