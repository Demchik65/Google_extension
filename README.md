# Summarizer Chrome Extension

This Chrome extension allows you to summarize the content of a webpage using OpenAI's API.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Google_extension.git
cd Google_extension
```

### 2. Create a `.env` File

Create a `.env` file in the root directory with your OpenAI API key:

```env
API_KEY=your-api-key-here
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Build the Extension

Run the build script to bundle your source code:

```bash
npm run build
```

This will generate the `scripts/background.js` file with your API key embedded.

### 5. Load the Extension in Chrome

1. Open Chrome and navigate to: `chrome://extensions`
2. Enable **Developer mode** (top right corner)
3. Click **Load unpacked**
4. Select the `Google_extension` directory

---

## Notes

* Ensure `.env` is **not committed** to your repo. It's already listed in `.gitignore`.
* Only the `background.entry.js` is tracked; the bundled output (`background.js`) is generated and ignored.

---

## Troubleshooting

* If you see an error about the API key being undefined, make sure your `.env` file is present and formatted correctly.
* If GitHub blocks your push, double-check that no keys were accidentally committed and force remove them from history if needed.

---

Happy summarizing!
