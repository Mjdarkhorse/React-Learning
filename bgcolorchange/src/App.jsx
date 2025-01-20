import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color, setColor] = useState('Olive');
  const colors = ['Olive', 'Teal', 'SkyBlue', 'Tomato', 'Gold','purple'];

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-md gap-3 bg-white px-2 py-3 rounded-xl">
          {colors.map((col, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-lg shadow-sm"
              style={{ backgroundColor: col }}
              onClick={() => setColor(col)}
            >
              {col}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};


export default App
