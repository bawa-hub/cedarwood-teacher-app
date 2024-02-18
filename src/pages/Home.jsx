import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='home'>
            <div className='home__totalPaid'>
                <h2>Total Paid: 10000</h2>
                <hr />
            </div>
            <div style={{ backgroundColor: 'lightgray' }}>
                <div onClick={() => navigate('/batches')} className='home__year'>
                    <h3>January</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
                <div onClick={() => navigate('/batches')} className='home__year'>
                    <h3>February</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
                <div onClick={() => navigate('/batches')} className='home__year'>
                    <h3>March</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
                <div onClick={() => navigate('/batches')} className='home__year'>
                    <h3>April</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
                <div onClick={() => navigate('/batches')} className='home__year'>
                    <h3>May</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
                <div onClick={() => navigate('/batches')} className='home__year'>
                    <h3>June</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
                <div onClick={() => navigate('/batches')} className='home__year'>
                    <h3>July</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
            </div>
        </div>
    )
}

export default Home