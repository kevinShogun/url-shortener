import React, { FormEvent, useRef, useState } from 'react'
import { NewUrl } from './NewUrl';

export const Form = () => {

  const [inputValue, setInputValue] = useState<string>('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length === 0) return;
    console.log(inputValue);
    try {

      const response = await fetch('/api/ShortUrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: inputValue })
      });

      const data = await response.json();
      console.log(data);
      if(window.location.origin && data.data.shortUrl){
        setUrl(`${window.location.origin}/${data.data.shortUrl}`);
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full md:w-1/2 '>
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">Url Shortener</h1>
      <br />
      <form className="flex flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="text-sm md:text-base lg:text-lg font-semibold">Url</label>
        <input type="text" placeholder="Url website" className=" text-sm md:text-base lg:text-lg
            outline-none
            p-2 border-2 border-gray-300 rounded-md"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button className="bg-blue-500 text-white p-2 rounded-md text-sm md:text-base lg:text-lg">Submit</button>
      </form>
      <br />
      <NewUrl shortUrl={url} />
    </div>
  )
}

export default Form;
