document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    try {
        const response = await fetch(`https://weather-external-api.vercel.app/weather/${city}`);
        const data = await response.json();
        if (response.ok) {
            document.getElementById('cityName').textContent = data.ville;
            document.getElementById('temperature').textContent = `Température: ${data.temperature}°C`;
            document.getElementById('description').textContent = `Description: ${data.description}`;
            document.getElementById('humidity').textContent = `Humidité: ${data.humidité}%`;
            document.getElementById('wind').textContent = `Vent: ${data.vent} m/s`;
            document.getElementById('weatherInfo').style.display = 'block';
        } else {
            alert('Impossible de récupérer les données météo.');
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur s\'est produite lors de la récupération des données météo.');
    }
});