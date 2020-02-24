const AccountData = require('../models/userSetupStore.js')
const path = require('path')

module.exports = (req, res) => {
    AccountData.create(req.body, (error, accountdata) => {
        console.log(error)
        if(error){
            return res.redirect('/userSetup')
        }
        res.redirect('/admin')
    })
}