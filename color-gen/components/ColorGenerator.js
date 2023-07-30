import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ColorGenerator = () => {
  const [input, setInput] = useState("");
  const [palette, setPalette] = useState([]);
  async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPEN_AI_API} `,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `What are the hex color codes for ${input} palette in just a single-line JavaScript array with no other explanations or variable name?`,
        max_tokens: 800,
      }),
    });

    const data = await response.json();
    console.log(data);
    const colorsString = data.choices[0].text.replace(/\n|\s|`/g, "");
    const validJSONString = colorsString.replace(/'/g, '"');
    console.log(validJSONString);
    const colorsArray = JSON.parse(validJSONString);
    setPalette(colorsArray.slice(0, 6));
  }

  return (
    <div className="w-screen h-screen">
      <div className="z-0 flex flex-col md:flex-row h-[100vh]">
        {palette.map((color, index) => (
          <motion.div
            onClick={() =>
              navigator.clipboard.writeText(color).then(alert("Copied!"))
            }
            whileHover={{ scaleX: 1.1 }}
            key={index}
            style={{
              backgroundColor: color,
            }}
            className="w-full h-full"
          >
            <motion.p
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer top-16 font-body m-5 md:top-2 lg:ml-9 bg-white w-fit rounded-full px-1 text-xs"
            >
              {color}
            </motion.p>
          </motion.div>
        ))}
      </div>

      <div>
        <input
          type="text"
          id="prompt"
          placeholder="What's your mood?"
          className="absolute top-56 mt-10 left-6 md:left-16 font-body text-xl border border-black rounded-full indent-4 p-1 h-11 w-[80vw]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="absolute cursor-pointer left-3/4 top-56 mt-12 md:ml-10 lg:ml-10">
          <button onClick={fetchData}>
            <Image
              width={24}
              height={24}
              src="/search.png"
              alt="search"
              className="w-6 md:w-7 "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorGenerator;
