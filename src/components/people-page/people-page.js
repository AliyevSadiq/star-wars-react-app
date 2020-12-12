import React, { Component } from 'react';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage  extends Component{

    state={
        selectedPerson:null
    }

    onPersonSelected =(id)=>{
        this.setState({
            selectedPerson:id
        })
    }
    swapi=new SwapiService();


    render() {

        const itemsList=(
            <ItemList getData={this.swapi.getAllPeople}
                      onItemSelected={this.onPersonSelected}>
                {(item)=>`${item.name} (${item.gender} ${item.birthYear})`}
            </ItemList>
        );

        return(
            <div className="row mb2">
                <div className="col-md-6">
                    {itemsList}
                </div>
                <div className="col-md-6">
                    <ItemDetails itemId={this.state.selectedPerson} />
                </div>
            </div>
        )
    }
}


