import { User } from "../models/user.js";

///////////////////////////////////////////////////////////////////////////

export const getAllUsers = async(req,res)=>{

    const users = await User.find({})
    console.log(req.query)

    const keyword = req.query.keyword;
    console.log(keyword);

    res.json({
        success:true,
        users,
    })
};

///////////////////////////////////////////////////////////////////////////


export const getNewUsers = async(req,res)=>{

    const {name , email, password} = req.body;

    await User.create({
        name,
        email,
        password,
});

    res.status(201).cookie("tempi", "lol").json({
        success:true,
        message: "Registered Succesfully",
    })
};

///////////////////////////////////////////////////////////////////////////

export const specialFunc = (req,res)=>{
    res.json({
      success:true,
      message: "Just Kidding!",
    });
};

///////////////////////////////////////////////////////////////////////////

export const getUserDetails = async(req,res)=>{

    const{id} =req.params;
    const user = await User.findById(id);
  
      res.json({
        success:true,
        user,
      });
};

///////////////////////////////////////////////////////////////////////////

export const updateUserDetails = async(req,res)=>{

    const{id} =req.params;
    const user = await User.findById(id);
  
      res.json({
        success:true,
        message: "Updated",
      });
};


///////////////////////////////////////////////////////////////////////////

export const deleteUserDetails = async(req,res)=>{

    const{id} =req.params;
    const user = await User.findById(id);
  
      res.json({
        success:true,
        message: "User Deleted",
      });
};