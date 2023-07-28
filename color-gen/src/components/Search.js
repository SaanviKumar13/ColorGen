import React, { useState } from "react";

export default function Search() {

  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post('/chatgpt', { prompt: input });
      setResponse(result.data.text);
    } catch (error) {
      console.error(error);
      setResponse('An error occurred while processing your request.');
    }
  };
  
  return (
    <div className="m-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="input" className="font-body absolute top-64 mt-2">Search:</label>
        <input
          type="text"
          id="input"
          placeholder="Search the type of colour you want"
          className="absolute border border-black text-xs text-left h-12 w-[60vw] rounded-xl p-2 left-20 top-64 indent-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
       <div className="absolute z-10 left-1/2 ml-20 top-64 mt-3 md:mt-2">
         <button type='submit' onSubmit={(e)=>handleSubmit(e)}>
           <img src="/search.png" alt="search" className="w-5 md:w-8 " />
         </button>
      </div>
      </form>
      <div className="absolute top-96 font-body">
        <h3 className="">Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};
