import React from 'react';
import {Option} from '../types/index'

export function SelectDemo({
  options,
  label,
  onChange,
}: {
  label: string;
  options: Option[];
  onChange: (selection: Option) => void;
}) {
  return (
    <select name={label} id={label} className='p-2 bg-white shadow-[0_0_3.5px_1px_rgba(0,0,0,0.3)] rounded-lg w-[180px]]'>
        <option value={label}>{label}</option>
        {
            options.map((listItem) => (
                <option 
                    value={listItem.value} 
                    onClick={() => onChange(listItem)} 
                    key={listItem.value} 
                >
                    {listItem.label}
                </option>
            ))
        }
    </select>
  )
}