import React from 'react';
const Row=({items,detail})=>{
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {items}
            </div>
            <div className="col-md-6">
                {detail}
            </div>
        </div>
    )
}
export default Row;