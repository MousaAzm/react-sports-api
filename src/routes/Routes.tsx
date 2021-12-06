import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { HomeView } from "../views/home/HomeView";
import { LeagueView } from "../views/league/LeagueView";
import { SportView } from "../views/team/SportView";
import RoutingPath from "./RoutingPath"

export const Routes = ({ children }: any) => {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route path ={RoutingPath.homeView} element={<HomeView />} />
        <Route path ={RoutingPath.SportView} element={<SportView />} />
        <Route path ={RoutingPath.leagueView} element={<LeagueView />} />
      </Switch>
    </BrowserRouter>
  );
};