from PIL import Image
img = Image.open("test_logo.png")
print("Mode:", img.mode)
print("Top-left pixel:", img.getpixel((0,0)))
print("Top-right pixel:", img.getpixel((img.width-1, 0)))
