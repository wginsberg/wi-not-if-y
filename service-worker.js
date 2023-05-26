let intervalId

function checkWifi() {
    const headers = { pragma: "no-cache" }
    return fetch("touch", { headers })
}

function notify() {
    checkWifi()
        .then(() => {
            self.registration.showNotification("We have wifi")
            clearInterval(intervalId)
        })
        .catch(() => console.log('no wifi... failing silently'))
}

self.addEventListener('message', function (event) {
    console.log('sw start interval')
    intervalId = setInterval(notify, 1000)
})
