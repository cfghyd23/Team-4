from reportlab.lib.pagesizes import landscape, A4
from reportlab.lib import colors, fonts
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch
from reportlab.graphics.shapes import Drawing
from reportlab.graphics import renderPDF
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import uuid
import qrcode

# Register fonts
pdfmetrics.registerFont(TTFont('heading', 'fonts/heading.ttf'))


def generate_certificate(name="Yashvardhan"):
    # Generate a unique ID for the certificate
    certificate_id = generate_certificate_id()

    # Generate the certificate PDF
    pdf = canvas.Canvas(
        f'certificates/{certificate_id}.pdf', pagesize=landscape(A4))
    pdf.drawImage('static/certificate.jpeg', 0, 0, width=842, height=595)

    # Set up the font and size for the recipient's name
    pdf.setFont("Helvetica", 36)
    pdf.drawCentredString(400, 250, f"{name}")

    gap = 30

    # Set up the font and size for the org
    pdf.setFont("Helvetica", 20)
    pdf.drawCentredString(450, 150, f"in raising funds for Marpu Foundation")

    # Generate the QR code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=4,  # Adjust the box size to reduce the QR code size further
        border=4,
    )
    qr.add_data(certificate_id)
    qr.make(fit=True)

    qr_image = qr.make_image(fill_color="black", back_color="white")

    # Calculate the coordinates to position the QR code in the bottom right corner
    qr_width, qr_height = qr_image.size
    page_width, page_height = landscape(A4)
    qr_x = page_width - qr_width - 50  # X coordinate
    qr_y = 50  # Y coordinate

    # Draw the QR code on the PDF canvas
    qr_image.save(f"qrs/{certificate_id}.png")
    pdf.drawInlineImage(f"qrs/{certificate_id}.png",
                        qr_x, qr_y, width=qr_width, height=qr_height)

    # Save the PDF
    pdf.save()
    return certificate_id


def generate_certificate_id():
    return str(uuid.uuid4())
