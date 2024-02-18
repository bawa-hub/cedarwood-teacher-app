import React from 'react'
import { useNavigate } from 'react-router-dom';

const ClassWise = () => {
    const navigate = useNavigate();

    return (
        <div className='home'>
            <div onClick={() => navigate('/batches')} style={{ padding: '3px', backgroundColor: 'lightgray', width: '35px', borderRadius: '4px', cursor: 'pointer' }}>back</div>
            <div className='home__totalPaid'>
                <h3>Class Wise Breakdown</h3>
                <hr />
            </div>
            <div style={{ backgroundColor: 'lightgray' }}>
                <div onClick={() => navigate('/child')} className='home__year'>
                    <h3>Class 1</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
                <div onClick={() => navigate('/child')} className='home__year'>
                    <h3>Class 2</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
                <div onClick={() => navigate('/child')} className='home__year'>
                    <h3>Class 3</h3>
                    <h3 style={{ color: 'gray' }}>2000</h3>
                </div>
            </div>
        </div>
    )
}

export default ClassWise