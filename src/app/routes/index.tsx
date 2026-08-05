import { BrowserRouter, Route, Routes as Switch, Redirect } from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/entrar" Component={Login}/>
        <Route path="/pagina-inicial" Component={Dashboard}/>

        <Route path="*" Component={() => <Redirect to="/pagina-inicial" />}/>
      </Switch>
    </BrowserRouter>
  );
}