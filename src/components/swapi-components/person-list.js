import {SwapiServiceConsumer} from "../swapi-context";
import WithData from "../hoc-helpers/with-data";
import React from "react";
import {useParams} from "react-router";

const PersonList=()=>{
    const items=[
        {label:"Gender",field:"gender"},
        {label:"Eye Color",field:"eyeColor"},
        {label:"Birth Year",field:"birthYear"}
    ]
    let { id } = useParams();
    return (
        <SwapiServiceConsumer>
            {
                ({getAllPeople,getPerson,getPersonImage})=>{
                    return(
                        <WithData  getData={getAllPeople} selectId={id} getSelectedItem={getPerson} getImage={getPersonImage} title="People List" fields={items} message="SELECT PERSON FROM A LIST" mainUrl="people"/>
                    )
                }
            }
        </SwapiServiceConsumer>
    )



}

export default PersonList;