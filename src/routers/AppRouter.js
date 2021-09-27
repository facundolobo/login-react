import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
//   Link,
//   useRouteMatch,
//   useParams
  Redirect
} from "react-router-dom";
import { LoginRegisterScreen } from "../components/auth/LoginRegisterScreen";


export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component={LoginRegisterScreen}/>
                            
                        <Redirect to="/login" />
                        
                    </Switch>
                </div>
                </Router>
        </div>
    )
}
