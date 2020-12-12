import {SwapiServiceConsumer} from "../swapi-context";
import WithData from "../hoc-helpers/with-data";
import React from "react";
import {useParams} from "react-router";

const PlanetsList=()=>{
    const items=[
        {label:"Population",field:"population"},
        {label:"Rotation Period",field:"rotationPeriod"},
        {label:"Diameter",field:"diameter"}
    ]
    let { id } = useParams();
    return (
        <SwapiServiceConsumer>
            {
                ({getAllPlanets,getPlanet,getPlanetImage})=>{
                    return (<WithData  getData={getAllPlanets} selectId={id} getSelectedItem={getPlanet} title="Planets List" getImage={getPlanetImage} fields={items} message="SELECT PLANET FROM A LIST" mainUrl="planets"/>);
                }
            }
        </SwapiServiceConsumer>
    )
}
export default PlanetsList;