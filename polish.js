const fs = require('fs')

function stringToCode(sir){

    var code = '';

    for(var i in sir){
        
        switch(sir[i]){
            case 's':
            case 'z':
                code += '0'
                break

            case 't':
            case 'd':
            case 'ț':
                code += '1'
                break
            
            case 'n':
                code += '2'
                break

            case 'm':
                code += '3'
                break

            case 'r':
                code += '4'
                break

            case 'l':
                code += '5'
                break

            case 'c':
            case 'g':
                if(sir[++i] == 'e' || sir[++i] == 'i')code += '6'
                else code += '7'
                --i
                break

            case 'j':
            case 'ș':
                code += '6'
                break

            case 'c':
            case 'k':
                code += '7'
                break

            case 'v':
            case 'f':
                code += '8'
                break

            case 'p':
            case 'b':
                code += '9'
                break

            case 'a':
            case 'ă':
            case 'â':
            case 'e':
            case 'i':
            case 'î':
            case 'o':
            case 'u':
            case 'h':
                break
            
            case ' ':
            case '-':
            case '/':
                if(code != '')
                    return code + ' ' + sir.slice(0, i)
                else return -1
                break

            default:
                return -1
                break
        }
    }
    if(code != '')
        return code + ' ' + sir.slice(0, ++i)
    else return -1
}

var mongoText = ''

fs.readFile('mongo.txt', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    const lines = data.split(/\r?\n/);

    lines.forEach((line) => {

        var temp = stringToCode(line)
        
        if(temp != -1) mongoText += temp + '\n'

    });

    fs.writeFile('polished.txt', mongoText, {encoding: 'utf-8'}, (err) =>{
        if (err){
            console.log(err)
            return
        }
    })

  })