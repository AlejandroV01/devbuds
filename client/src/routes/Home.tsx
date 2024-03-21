import React, { useState } from 'react';

const Home: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = () => {
    setSelectedValue(prevValue => prevValue === 'selected' ? null : 'selected');
  };

  return (
    <div>
      <h1>Home</h1>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-5 w-5 text-indigo-600"
          checked={selectedValue === 'selected'}
          onChange={handleChange}
        />
        <span className={`ml-2 ${selectedValue ? 'text-blue-500' : 'text-gray-700'}`}>
          Option
        </span>
      </label>
    </div>
  );
};

export default Home;


