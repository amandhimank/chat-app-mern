import React from 'react'

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className='flex gap-6 mb-2'>
            <div className="form-control">
                <label className={`cursor-pointer label gap-2 ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text">male</span>
                    <input type="checkbox" className="checkbox checkbox-warning"
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control">  
                <label className={`cursor-pointer label gap-2 ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className="label-text">female</span>
                    <input type="checkbox" className="checkbox checkbox-warning"
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox