 
import './App.css';
import Feeds from './Components/Feeds/Feeds';
import Header from './Components/header/Header';
import Login from './Components/Login/Login';
import Sidebar from './Components/Sidebar/sidebar';
import Widgets from './Components/Widgets/Widgets';
function App() {

  const user =null;
  
  return (
     
    
        <div className="app"> 
      {
        ! user ? (<Login/>) :
          (<>
           {/* Header component */}
            <Header />

            <div className="app_body">
              {/*  sidebar */}
              <Sidebar />
              {/* feed */}
              <Feeds />
          
              {/* Widgets */}

              <Widgets />
            </div>
   
          </>)}
       </div>  
          
 
        
     
   
   
     
  );
}

export default App;
