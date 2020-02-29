const bcrypt = require('bcrypt')
const User = require('../models/userSetupStore')

module.exports = (req, res) => {
    const {username, password} = req.body;

    User.findOne({username:username}, (error,user)=> {
        console.log(user)
        if(user){
            bcrypt.compare(password, user.password, (error, same) =>{
                if(same){
                    req.session.userId = user._id
                    req.session.username = user.username
                    req.session.accounttype = user.accounttype
                    console.log(req.session)
                    res.redirect('/dashboard')
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