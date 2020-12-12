import React, {Component, Fragment} from 'react';

import Spinner from '../spinner';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Record from "../record";
import ErrorIndicator from "../error-indicator";



export default class WithData extends Component{
    state = {
        data: null,
        selectedId:null,
        hasError:false
    };



    componentDidMount() {

        this.setState({
            selectedId:this.props.selectId
        })

        this.props.getData()
            .then((data) => {
                this.setState({
                    data
                });
            }).catch(()=>{
            this.setState({
                hasError:true
            })
        });
        document.title=`STAR DB | ${this.props.title}`
    }
    onPersonSelected =(id)=>{

        this.setState({
            selectedId:id
        })
    }
    render() {
        const { data } = this.state;

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        if (!data) {
            return <Spinner />;
        }


        const fields=this.props.fields.map((item)=>{
            return   <Record label={item.label} field={item.field}/>
        })
        return (
            <Fragment>
                <div className="col-md-6">
                    <ItemList  data={data} mainUrl={this.props.mainUrl} onItemSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <ItemDetails  itemId={this.state.selectedId}  getData={this.props.getSelectedItem} getImage={this.props.getImage} message={this.props.message}>
                        {fields}
                    </ItemDetails>
                </div>
            </Fragment>
        )

    };
};

