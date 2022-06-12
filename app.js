const fetch = require("node-fetch")

ip="1.1.1.1"

fetch(`https://ipinfo.io/widget/demo/${ip}`, {
    headers: {
        "Content-Type": "application/json",
        "Referer": "https://ipinfo.io/",
    }
}).then(ipinfo => ipinfo.text()).then(ipinfo => {
    console.log(ipinfo)
})