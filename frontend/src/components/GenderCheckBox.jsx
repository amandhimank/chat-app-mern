import React from 'react'

const GenderCheckBox = () => {
    return (
        <div className='flex gap-6 mb-2'>
            <div className="form-control">
                <label className="cursor-pointer label gap-2">
                    <span className="label-text">male</span>
                    <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
            </div>
            <div className="form-control">
                <label className="cursor-pointer label gap-2">
                    <span className="label-text">female</span>
                    <input type="checkbox" className="checkbox checkbox-warning" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox