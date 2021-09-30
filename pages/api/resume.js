const fs = require('fs');

export default (req, res) => {
    res.setHeader('Content-disposition', 'inline; filename=Guilherme.pdf')
    res.setHeader('Content-type', 'application/pdf')

    var file = fs.createReadStream('public/Guilherme.pdf')
    file.pipe(res)
  }
