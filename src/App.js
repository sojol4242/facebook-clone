 
import './App.css';
import Feeds from './Components/Feeds/Feeds';
import Header from './Components/header/Header';
import LogIn from './Components/LogIn/LogIn';
import Sidebar from './Components/sidebar/Sidebar';
import { useStateValue } from './Components/StateProvider';
import Widgets from './Components/Widgets/Widgets';
function App() {

  // const user = null;
  
  const[{ user }, dispatch] = useStateValue();
  
  return (
     
    
        <div className="app"> 
      {
        !user?(<LogIn/>):
          (<>
           {/* Header component */}
            <Header />

            <div className="app_body">
              {/*  sidebar */}
              <Sidebar/>
              {/* feed */}
              <Feeds />
          
              {/* Widgets */}

              <Widgets />
            </div>
   
          </>)
      }
       </div>  
          
 
        
     
   
   
     
  );
}

export default App;
