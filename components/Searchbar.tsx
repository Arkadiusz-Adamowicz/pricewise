'use client';

// https://www.youtube.com/watch?v=lh9XVGv6BHs&ab_channel=JavaScriptMastery
// 1"03"04

import { FormEvent, useState } from 'react';

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if (
      hostname.includes('amazon.com') ||
      hostname.includes('amazon') ||
      hostname.endsWith('amazon')
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
};

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  console.log(searchPrompt);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    alert(isValidLink ? 'Valid link' : 'Invalid link');
  };

  return (
    <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
      <input
        type='text'
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder='Enter product link'
        className='searchbar-input'
      />

      <button type='submit' className='searchbar-btn'>
        Search
      </button>
    </form>
  );
};

export default Searchbar;
