import {SwapiServiceConsumer} from "../swapi-context";
import WithData from "../hoc-helpers/with-data";
import React from "react";
import {useParams} from "react-router";

const StarshipsList=()=>{
    const items=[
        {label:"Model",field:"model"},
        {label:"Manufacturer",field:"manufacturer"},
        {label:"Cost",field:"costInCredits"}
    ]
    let { id } = useParams();

    return(
        <SwapiServiceConsumer>
            {
                ({getAllStarships,getStarship,getStarshipsImage})=>{
                    return (<WithData  getData={getAllStarships} getSelectedItem={getStarship} title={"Starships List"} getImage={getStarshipsImage} fields={items} message="SELECT STARSHIP FROM A LIST" selectId={id} mainUrl="starships"/>);
                }
            }
        </SwapiServiceConsumer>
    )


}
export default StarshipsList;