document.getElementById('translate-button').addEventListener('click', async function() {
    const textToTranslate = document.getElementById('text-to-translate').value;
    const targetLanguage = document.getElementById('target-language').value;
    const apiKey = '96e1476da4msha3b6fd302117ea7p1cfe88jsnf36102d659d8'; // Replace with your RapidAPI key

    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const data = new URLSearchParams();
    data.append('q', textToTranslate);
    data.append('target', targetLanguage);
    data.append('source', 'en'); // Change this if you want to detect the source language dynamically

    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
            'Accept-Encoding': 'application/gzip',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const translatedText = result.data.translations[0].translatedText;
        document.getElementById('translated-text').textContent = translatedText;
    } catch (error) {
        console.error('Error:', error);
    }
});
