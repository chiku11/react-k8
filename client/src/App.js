import React, { useState } from 'react';

const App = () =>{
  const [number, setNumber] = useState(0);
  const handleClick = async () => {
    const resp = await fetch(process.env.REACT_APP_BACK_END_URL);
    const json = await resp.json();
    return setNumber(json.number);
  }
  return  (
    <div>
          <input type="button" value="Get Random Nuber" onClick={handleClick} /> {number}
    </div>
  );
};

export default App;
