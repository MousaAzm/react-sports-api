import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { HomeView } from "../views/home/HomeView";
import { PlayerView } from "../views/player/PlayerView";
import { TeamView } from "../views/team/TeamView";
import RoutingPath from "./RoutingPath"


export const Routes = ({ children }: any) => {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route path ={RoutingPath.homeView} element={<HomeView />} />
        <Route path ={RoutingPath.playerView} element={<PlayerView />} />
        <Route path ={RoutingPath.teamView} element={<TeamView />} />
      </Switch>
    </BrowserRouter>
  );
};