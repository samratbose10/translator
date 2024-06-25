let recognition;

async function translateText() {
    const text = document.getElementById('textInput').value;
    const language = document.getElementById('languageSelect').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${language}`;

    // Show loading indicator
    document.getElementById('loadingIndicator').style.display = 'block';

    // Error handling for empty input
    if (!text.trim()) {
        alert('Please enter text to translate');
        document.getElementById('loadingIndicator').style.display = 'none';
        return;
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': apiKey,
                'Ocp-Apim-Subscription-Region': 'YOUR_REGION' // Replace with your region
            },
            body: JSON.stringify([{ Text: text }])
        });

        if (!response.ok) {
            throw new Error('Translation failed');
        }

        const data = await response.json();
        const translatedText = data[0].translations[0].text;
        document.getElementById('translatedText').innerText = translatedText;

        // Save translation to history
        addToHistory(text, translatedText);
    } catch (error) {
        alert('An error occurred: ' + error.message);
    } finally {
        // Hide loading indicator
        document.getElementById('loadingIndicator').style.display = 'none';
    }
}

function toggleDarkMode() {
    const container = document.getElementById('container');
    const body = document.body;
    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
}

function copyToClipboard() {
    const translatedText = document.getElementById('translatedText').innerText;
    navigator.clipboard.writeText(translatedText).then(() => {
        alert('Copied to clipboard');
    }).catch(err => {
        alert('Failed to copy: ' + err);
    });
}

function speakText() {
    const text = document.getElementById
