
async function login(req, res, callback){
    try{
        const user = await User.findOne({email:req.body.email})
        
        const isMatch = await user.comparePassword(req.body.password)  

        if (!isMatch) {
            return res.status(401).send('Incorrect password!')
        }    
        const payloads = {id: user._id, email: user._email}
        const token = await jwt.sign(payloads, config.secret, {})

        user.token = token
        const success = await user.save()

        return res.json({token})
    }catch(err){
        callback(err)
    }
}
