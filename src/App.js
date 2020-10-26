import React,{useState} from 'react';
import {Route,Switch,BrowserRouter as Router,Redirect} from 'react-router-dom';
import  CreateAccount from './CreateAccount.js'
import Login from './Login.js';
import Header from './Header';
import UserJournal from './UserJournal.js'
import './App.css';
export const  HeaderContext=React.createContext();
export default function App() {
  const [data,setData]=useState();
    const authenticatedUser=(dta)=>{
   setData(dta);
}
const logOutUser=()=>{
  setData({})
}
  return (
 <div className="App">
   <HeaderContext.Provider value={data}>
    <Router>
     <Header logOutUser={logOutUser}/>
     <Switch>
       <Route exact path='/' render={()=><div style={{width:"800px",margin:"30px auto"}}>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
         quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
          sit aspernatur aut odit aut fugit, sed quia consequuntur magni
           dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
         vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
       </div>}/>
       <Route  path={'/login'} render={()=><Login authenticatedUser={authenticatedUser}/>}/>
       <Route path={'/register'} component={CreateAccount}/>
       {data&&<Route path={'/auth'}  render={()=><UserJournal data={data}/>}/>}
       <Redirect to='/'/>
     </Switch>
  </Router>
  </HeaderContext.Provider>
</div>
  );
}
