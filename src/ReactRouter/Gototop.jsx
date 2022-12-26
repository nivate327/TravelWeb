import React from 'react'

const Gototop = () => {

    
    const gototop=()=>
    {
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }

    return (
        <>
            <div className="topbtn">
                <button className='btn scrollBtn' onClick={gototop}>
                    <i class="fa-solid fa-arrow-turn-up"></i>
                </button>
            </div>
        </>
    )
}

export default Gototop
