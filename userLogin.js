const bcrypt = require('bcrypt')
const User = require('../models/userSetupStore')

module.exports = (req, res) => {
    const {username, password} = req.body;

    User.findOne({username:username}, (error,user)=> {
        if(user){
            bcrypt.compare(password, user.password, (error, same) =>{
                if(same){
                    res.redirect('/admin')
                }
                else{
                    res.redirect('/userLogin')
                }
            })
        }
        else{
            res.redirect('/userLogin')
        }
    })
}