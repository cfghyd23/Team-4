
base = wflwebsite.settings.BASE_DIR
directory = wflwebsite.settings.BASE_DIR / "certificates"
font = ImageFont.truetype('arial.ttf', 60)
img = Image.open(f'{directory}/certificate.jpg')
draw = ImageDraw.Draw(img)
draw.text(xy=(725, 760), text=request.user.first_name,
          fill=(0, 0, 0), font=font)
img.save(f'{base}/media/certificates/{request.user.username}.jpg')
