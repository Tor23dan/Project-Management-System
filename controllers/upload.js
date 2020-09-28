module.exports = (req, res) =>{
    if (!req.files || Object.keys(req.files).length === 0) {
        const validationErrors = 'No File Chosen. Please choose a file'
        req.flash('validationErrors',validationErrors)
        console.log('No File Chosen. Please choose a file')
        res.redirect('/moduletemplate')
    }
    if(req.files) {
        console.log(req.files)
        var file = req.files.file
        var filename = file.name
        console.log(filename)
        
        file.mv('./public/img/'+filename,function(err){
            if(err){
                res.send(err)
            } else {
                const validationErrors = 'File Uploaded'
                req.flash('validationErrors',validationErrors)
                console.log('File Successfully Uploaded')
                res.redirect('/moduletemplate')
            }
        })
    }
}