// Import the API key from config.js
// Handle the API request using .then()/.catch()
// Respond back to the message sender with the summarized content

// Ensure that we load the config.js file as a Global 
// #DEVELOPMENT ONLY - load API_KEY
// const API_KEY = __API_KEY__;
const API_KEY = process.env.API_KEY;

// Promise turned into a function to be later called 
function chatGPTSummarizer(text, callback) {  // a function that takes a url and a callback
    fetch("https://api.openai.com/v1/chat/completions", { // fetch api and headers.
      method: "POST", // making a post request
      headers: { // headers
        "Content-Type": "application/json",  // passing json, might need to update this to a url
        "Authorization": `Bearer ${API_KEY}` // allowing access
      },
      body: JSON.stringify({
        model: "gpt-4o", // we can use other models 
        messages: [  // role and user are a part of chatgpt acl needs to be passed in.
          { role: "system", content: "Summarize this page clearly and concisely in 3-4 sentences." },
          { role: "user", content: text }
        ]
      })
    })
    .then(res => res.json())  //the fetch returns a promise, have to use .then to wait on the promises
    .then(data => {  // this then will convert the data 
      console.log("what do you have for me :", data) // console log to see what data is returned from the server
      const summary = data.choices?.[0]?.message?.content || "No summary returned."; // or check to fallback the question marks are questions
      callback(summary); // pass the summary to the callback, rename so i know what the call back is doing
    })
    .catch(err => { // catch function to see what is we get an error
      console.error("OpenAI API error:", err); // printing to the console if we get an error
      callback("Error while summarizing.");  // 
    });
  }

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) { // when a message is sent to this, run this function
    if (request.action === "summarize" && request.content) { //
      chatGPTSummarizer(request.content, function (summary) { //
        sendResponse({ summary: summary }); //
      });
      return true; // Keeps sendResponse alive for async
    }
  });


// TEMPORARY TEST
// chatGPTSummarizer("Summarize this: The quick brown fox jumps over the lazy dog.", function (summary) {
//     console.log("SUMMARY RESPONSE:", summary);
//   });