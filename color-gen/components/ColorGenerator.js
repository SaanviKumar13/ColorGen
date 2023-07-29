import { useState } from 'react';
import axios from 'axios';

const ColorGenerator = () => {
  const [input, setInput] = useState('');
  const [palette, setPalette] = useState([]);

  const API_KEY="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"
  async function fetchData(){
    const response=await fetch("https://api.openai.com/v1/completions",{
        method:"POST",
        headers:{
            Authorization: `Bearer ${API_KEY} `,
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            model: "text-davinci-003",
            prompt:`What are the hex color codes for ${input} palette in just a single-line JavaScript array with no other explanations or variable name?`,
            max_tokens: 800,
        })
    })
    const data= await response.json();
    const colorsString = data.choices[0].text.replace(/\n|\s/g, '');
    const validJSONString = colorsString.replace(/'/g, '"');
    const colorsArray = JSON.parse(validJSONString);
    setPalette(colorsArray);
    
}

  return (
    <div className='m-5'>
    <div>
      <input
        type="text"
        id="prompt"
        placeholder='Describe your color palette'
        className='font-body text-sm border border-black rounded-full indent-4 p-1 w-96'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
    <button onClick={fetchData} className='font-body border border-black hover:bg-black hover:text-white rounded-full px-3 mt-5'>Generate Palette</button>
    <div>
      {palette.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: '50px',
            height: '50px',
            display: 'inline-block',
            margin: '5px',
          }}
        ></div>
      ))}
    </div>
  </div>
  );
};

export default ColorGenerator;
