
import React from 'react';
import PropTypes from 'prop-types';
import './item-list.css';
import {Link} from 'react-router-dom';
 const  ItemList =(props)=> {



        const {data,onItemSelected,mainUrl}=props;
        const elements= data.map((item)=>{
             const {id,name}=item;
             return  (
                 <Link to={`/${mainUrl}/${id}`}><li className="list-group-item" onClick={()=>onItemSelected(id)}>
                     {name}
                 </li></Link>
             )
         })
        return (
            <ul className="item-list list-group">
                {elements}
            </ul>
        );
}
ItemList.propTypes={
    onItemSelected:PropTypes.func.isRequired,
    data:PropTypes.arrayOf(PropTypes.object).isRequired
}



export default ItemList;

