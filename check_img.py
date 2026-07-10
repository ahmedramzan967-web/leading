import urllib.request
import sys

url = "https://lh3.googleusercontent.com/d/1QNxqz9qAf_ineMh22RBo4WMO6M8EDcgI"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        with open("test_logo.png", "wb") as f:
            f.write(response.read())
    print("Downloaded")
except Exception as e:
    print("Error:", e)
