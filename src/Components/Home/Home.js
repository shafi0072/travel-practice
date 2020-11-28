import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import fakeDate from '../../fakeData/fakeData'
import Places from './Places';
const Home = () => {

    return (
        <div className='Home'>
            <Navbar/>
            <div className="row">
                <div className="col-md-6">
                    <h1>COX'S BAZAR</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate rerum nam expedita perspiciatis vitae. Pariatur, ad eaque recusandae quo odio beatae, sed necessitatibus reiciendis illum provident impedit excepturi dolore praesentium!</p>
                    <button className="btn btn-warning">Book </button>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        {
                            fakeDate.map(data => <Places key={data.id} data={data}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;