document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
  
    button.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentUrl = tabs[0].url;
  
        chrome.runtime.sendMessage(
          {
            action: "summarize",
            content: currentUrl,
          },
          (response) => {
            if (response && response.summary) {
              const div = document.querySelector("div");
              div.innerText = response.summary;
            } else {
              console.error("No summary returned.");
            }
          }
        );
      });
    });
  });