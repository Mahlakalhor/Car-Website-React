import React from 'react'

export const Hero = () => {
  return (
    <div className='flex flex-col '>
        <h1>Luxury Cars on Rent</h1>
        <div className='bg-white'>
            <div>
                <select className='flex flex-col'>
                    <option>
                    1
                </option>
                 <option>
                    2
                </option>
                 <option>
                    3
                </option>
                 <option>
                    4
                </option>
                 <option>
                    5
                </option>
                </select>
                
            </div>
            <div>
                <label htmlFor='pickup-date' >Pick-Up date</label>
                <input type='date' id='pickup-date' />
            </div>
            <div>
                <label htmlFor='return-date' >Return date</label>
                <input type='date' id='return-date' />
            </div>
            <div>
                <button>

                </button>
            </div>

        </div>
    </div>
  )
}
