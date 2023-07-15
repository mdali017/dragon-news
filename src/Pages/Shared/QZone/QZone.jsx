import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'


const QZone = () => {
    return (
        <div className='bg-secondary mt-5 mb-4 rounded'>
            <h3 className='p-3'>Q-Zone</h3>
            <div className='text-center'>
                <img className='w-75' src={qzone1} alt="" />
                <img className='w-75' src={qzone2} alt="" />
                <img className='w-75' src={qzone3} alt="" />
            </div>
            
        </div>
    );
};

export default QZone;