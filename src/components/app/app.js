import React,{Component} from 'react';
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorIndicator from "../error-indicator";
import {SwapiServiceProvider} from "../swapi-context";


import SwapiService from "../../services/swapi-service";
import PlanetsList from "../swapi-components/planet-list";
import PersonList from "../swapi-components/person-list";
import StarshipsList from "../swapi-components/starship-list";





export default  class App extends Component{
    swapiService=new SwapiService();
    state = {
        showRandomPlanet: true,
        hasError: false
    };
    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError:true
        })
    }




    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="container">
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                                <Header/>
                                <RandomPlanet />
                        <div className="row mb2 mt-5">
                            <Switch>
                                <Route exact path="/" component={PersonList} />
                                <Route exact path="/people/:id?" component={PersonList}/>
                                <Route exact path="/planets/:id?" component={PlanetsList}/>
                                <Route exact path="/starships/:id?" component={StarshipsList}/>
                                {/*<Redirect to="/"/>*/}
                                <Route render={()=><h1>PAGE NOT FOUND</h1>}/>
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </div>
        );
    }


};




