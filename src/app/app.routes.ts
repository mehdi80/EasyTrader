import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MarketWatchComponent} from "./components/market-watch/market-watch.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";


export const routes: Routes = [
  {path: '', component: AppComponent},
  { path:'marketWatch' , component: MarketWatchComponent},
  {path:'portfolio', component: PortfolioComponent},
];

