import requests

ip=input("IP: ")

print(
    requests.get("https://ipinfo.io/widget/demo/"+ip, headers={
        "Content-Type": "application/json",
        "Referer": "https://ipinfo.io/",
    }).json()
)