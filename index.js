async function translateText() {
    const text = document.getElementById('textInput').value;
    const language = document.getElementById('languageSelect').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${language}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': apiKey,
            'Ocp-Apim-Subscription-Region': 'YOUR_REGION' // Replace with your region
        },
        body: JSON.stringify([{ Text: text }])
    });

    const data = await response.json();
    document.getElementById('translatedText').innerText = data[0].translations[0].text;
}
