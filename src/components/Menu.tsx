import React from 'react'

const Menu: React.FC = () => {
    return (
        <div className='flex justify-center py-2  text-white '>
            <div className='flex space-x-4'>
                <p className='btn-primary' >Home</p>
                <p className='btn-primary'>Menu</p>
                <p className='btn-primary'>About</p>
                <p className='btn-primary'>Contact</p>
            </div>
        </div>
    )
}

export default Menu