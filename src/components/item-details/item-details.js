
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './item-details.css';
import ErrorIndicator from "../error-indicator";
export default class ItemDetails extends Component {


   state={
       item:null,
       hasError: false
   }
   static propTypes={
       itemId:PropTypes.number.isRequired,
       getData:PropTypes.func.isRequired,
       children:PropTypes.array.isRequired
   }


   componentDidMount() {
       this.updatePerson();
   }
   componentDidUpdate(prevProps) {
       if(this.props.itemId!==prevProps.itemId){
           this.updatePerson();
       }
   }


    updatePerson(){
    const {itemId,getData}=this.props;
    if(!itemId){
        return;
    }

        getData(itemId).then((item)=>{
            this.setState({item})
       }).catch(()=>{
            this.setState({ hasError: true });
        });
   }




    render() {
     const {item}=this.state;
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
       if(!item){
           return <span>{this.props.message}</span>
       }


       const {id,name}=item;

        return (
            <div className="person-details card">
                <img className="person-image"
                     src={this.props.getImage(id)}
                    alt={name}
                />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">

                        {React.Children.map(this.props.children,(child)=>{
                            return React.cloneElement(child,{item});
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}