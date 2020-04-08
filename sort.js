const fs = require('fs')

fs.readFile('polished.txt', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    const lines = data.split(/\r?\n/);

    var unique = [...new Set(lines)]
    unique.sort()

    var sortText = ''

    unique.forEach((line) => {

        sortText += line + '\n'

    });
    fs.writeFile('sorted.txt', sortText, {encoding: 'utf-8'}, (err) =>{
        if (err){
            console.log(err)
            return
        }
    })
  })