const pdfkit = require('pdfkit')
const fs = require('fs')

const pdfdocument = new pdfkit

pdfdocument.pipe(fs.createWriteStream("teacher_timesheet.pdf"))

pdfdocument.image('original_timesheet.png', {
    fit: [250, 300],
    align: 'center',
    valign: 'center'
})

pdfdocument.end()


