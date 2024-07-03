document.getElementById('translate-button').addEventListener('click', async function() {
    const textToTranslate = document.getElementById('text-to-translate').value;
    const targetLanguage = document.getElementById('target-language').value;

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|${targetLanguage}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const result = await response.json();
        const translatedText = result.responseData.translatedText;
        document.getElementById('translated-text').textContent = translatedText;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('translated-text').textContent = 'Error: ' + error.message;
    }
});
