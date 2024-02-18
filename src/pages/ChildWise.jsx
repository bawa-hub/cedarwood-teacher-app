import React from 'react'
import { useNavigate } from 'react-router-dom';

const ChildWise = () => {
    const navigate = useNavigate();

    return (
        <div className='home'>
            <div onClick={() => navigate('/classes')} style={{ padding: '3px', backgroundColor: 'lightgray', width: '35px', borderRadius: '4px', cursor: 'pointer' }}>back</div>
            <div className='home__totalPaid'>
                <h3>Child Wise Breakdown</h3>
                <hr />
            </div>
            <div style={{ backgroundColor: 'lightgray' }}>
                <div className='home__year'>
                    <h3>Rahul</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
                <div className='home__year'>
                    <h3>Rohit</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
                <div className='home__year'>
                    <h3>Vikram</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
            </div>
        </div>
    )
}

export default ChildWise