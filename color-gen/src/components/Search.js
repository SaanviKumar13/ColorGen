import React, { useState } from "react";
import openai from "openai";
import { Configuration } from "openai";
import { OpenAIApi } from "openai";
export default function Search() {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const [response, setResponse] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt} colors in hex`,
        temperature: 0.5,
        max_tokens: 500,
      });
      setResponse(result.data.choices[0].text);
    } catch (e) {
      setResponse("Something is going wrong, Please try again.");
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
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
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
