const router = require("express").Router();
const User = require('../models/User')
// const CryptoJS = require('crypto-js')
// const SEC_KEY = process.env.SEC_KEY
const jwt = require('jsonwebtoken')
const JWT_SECKEY = process.env.JWT_SECKEY
const bcrypt = require("bcrypt");
const{validator, validated, validateSignin} = require('../extra/Validator')



//Registeration

router.post('/register',validator,validated,async (req,res)=>{
  const {username,email,password} = req.body;
  if(!username || !email || !password)
      return res.status(404).json({error:"Make sure you have filled the all fields !"});
try{

  const Username = username.toLowerCase();
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const newUser = await new User({
      username:Username,
      email,
      password:hashedPassword,
  })

  const savedUser = await newUser.save()
  res.status(201).json({message:"User Registerd successfully",savedUser});
  
  
}
catch(err)
{
      res.status(404).json({error:err});
}
})
  









   router.post('/login' ,validateSignin,validated, async (req,res,next)=>{

    const foundUser = await User.findOne({username:req.body.username});
if(!foundUser)
    return res.status(401).json({error:"username or password is not valid !"});
    
    try{
        const passMatch = await bcrypt.compareSync(req.body.password,foundUser.password);
        console.log("Password match = ",passMatch);
        console.log("username = ",req.body.username);
        console.log("password = ",req.body.password);
        if(!passMatch)
            return res.status(500).json({error:"username or password is not valid !"});

        const token = jwt.sign({
            id:foundUser._id,
            isAdmin:foundUser.isAdmin
            },
            JWT_SECKEY,
            {expiresIn:"3d"}
        )

        const {password,...others} = foundUser._doc;

    res.status(200).json({message:"Logged in succeed..",...others,token});
}
catch(err){
    res.status(500).json({error:err});

}

})















module.exports = router





