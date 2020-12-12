import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import SwApiService from '../../services/swapi-service';
import './random-planet.css';
import PlanetView from "../swapi-components/planet-view";


export default class RandomPlanet extends Component {

   swapi=new SwApiService();
    state={
        planet:{},
        loading:true
    }
    componentDidMount() {
        this.updatePlanet();
        this.interval=setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded=(planet)=>{
        this.setState({planet,loading:false,error:false});
    }
  onError=()=>{
    this.setState({
        error:true,
        loading:false
    })
  }

    updatePlanet=()=>{
        const id=Math.floor(Math.random()*25)+3;
        this.swapi.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError)
    };

    render() {
        const {planet,loading,error} =this.state;
        const spinner=loading ? <Spinner/> :null;
        const content=!(loading || error) ? <PlanetView planet={planet}/> : null;
        const errorMsg=error ? <ErrorIndicator/> :null;
        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {content}
                {errorMsg}
            </div>

        );
    }
}
