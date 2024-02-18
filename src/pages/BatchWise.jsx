import React from 'react'
import { useNavigate } from 'react-router-dom';

const BatchWise = () => {

    const navigate = useNavigate();

    return (
        <div className='home'>
            <div onClick={() => navigate('/')} style={{ padding: '3px', backgroundColor: 'lightgray', width: '35px', borderRadius: '4px', cursor: 'pointer' }}>back</div>
            <div className='home__totalPaid'>
                <h3>Batch Wise Breakdown</h3>
                <hr />
            </div>
            <div style={{ backgroundColor: 'lightgray' }}>
                <div onClick={() => navigate('/classes')} className='home__year'>
                    <h3>Phonics</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
                <div onClick={() => navigate('/classes')} className='home__year'>
                    <h3>Chess</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
                <div onClick={() => navigate('/classes')} className='home__year'>
                    <h3>English</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
            </div>
        </div>
    )
}

export default BatchWise