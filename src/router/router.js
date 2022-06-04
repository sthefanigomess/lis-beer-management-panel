import {Home} from "../pages/Home/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}