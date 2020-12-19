from PyPDF2 import PdfFileWriter, PdfFileReader
import io
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter

# questions
first_name = input('First Name: ')
last_name = input('Last Name: ')
file_number = input('File Number: ')

packet = io.BytesIO()

# create a new PDF with Reportlab
can = canvas.Canvas(packet, pagesize=letter)

# insert information
can.drawString(234, 660, first_name)
can.drawString(24, 660, last_name)
can.drawString(350, 588, file_number)

can.save()

# move to the beginning of the StringIO buffer
packet.seek(0)
new_pdf = PdfFileReader(packet)

# read your existing PDF
existing_pdf = PdfFileReader(open("original.pdf", "rb"))
output = PdfFileWriter()

# add the "watermark" (which is the new pdf) on the existing page
page = existing_pdf.getPage(0)
page.mergePage(new_pdf.getPage(0))
output.addPage(page)

# finally, write "output" to a real file
outputStream = open("completed.pdf", "wb")
output.write(outputStream)
outputStream.close()