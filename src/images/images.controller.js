const fs            = require('fs')
const service       = require('./images.service')
const uuid_base64   = require('uuid-base64')

module.exports = {

    storeImage: (path, file) => {

        return new Promise( resolve => {

            path = `/public/images/${path}`

            const imageName = uuid_base64.decode(file)
            const imagePath = `${path}/${imageName}`

            service.storeImage( imagePath ).then( response => {

                if(!!response.error){
                    resolve({error})
                }
        
                if(!response.status){
                    resolve({imageId: response.imageId})
                }
        
                if(response.status){
                    
                    file = file.replace(/^data:image\/\w+;base64,/, "")
                    const buff = Buffer.from(file, 'base64')
        
                    if (!fs.existsSync(`.${path}`)){
                        fs.mkdirSync(`.${path}`)
                    }
                    
                    fs.writeFile(`.${imagePath}.png`, buff, (error) => {

                        if(error){
                            console.log(error)
                        }
                    })
                    
                    resolve({imageId: response.imageId})
                }
    
            })
        })
    }
}