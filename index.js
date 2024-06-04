/*
Create a basic markdown editor in Next.js with the following features:
- Use react hooks
- Create a state for markdown with the default text "type markdown here"
- A text area where users can write markdown 
- Show a live preview of the markdown text as I type
- Support for basic markdown syntax like headers, bold, and italics 
- Use React markdown npm package 
- The markdown text and resulting HTML should be saved in the component's state and updated in real-time 
*/ 

import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Home() {
  const [markdown, setMarkdown] = useState('type markdown here')

  return (
    <div>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

/*
take a sentence as input
reverse the input sentence
the start of the sentence must start with a capital
for javascript
*/
function reverseSentence(sentence) {
  // Reverse the input sentence
  const reversedSentence = sentence.split('').reverse().join('');

  // Capitalize the first letter of the reversed sentence
  const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

  return capitalizedSentence;
}

const inputSentence = "Hello, world!";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence);


const data = [
  [
    { name: 'John' },
    { name: 'Jane'}
    { name: 'Bob'}
  ]
];

const names = data.flatMap(subArray => subArray.map(obj => obj.name));

console.log(names); // Output: ['John', 'Jane', 'Bob']





