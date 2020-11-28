import React from 'react';

const Places = (props) => {
    const {name, img} = props.data
    return (
        <div className='col-md-4'>
            <div className="PlaceImage">
                <img style={{width:'300px'}} src={img} alt=""/>
            </div>
        </div>
    );
};

export default Places;