const userService=require("../services/user.service.js")
// [ Bearer , token ]
const getUserProfile=async(req,res)=>{
    
    const jwt=req.headers.authorization?.split(" ")[1];
    console.log("req ",jwt)
    try {
       

        if(!jwt){
            return res.status(404).send({error:"token not found"})
        }
        const user=await userService.getUserProfileByToken(jwt)

        return res.status(200).send(user);
    } catch (error) {

        return res.status(500).send({error:error.message})
        
    }
}

const getAllUsers=async(req,res)=>{
    try {
        const users=await userService.getAllUsers();
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const deletedUser = await userService.deleteUserById(userId);
        res.status(204).send(); // Send a success response if the user is deleted
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send({ error: "Failed to delete user" });
    }
};
module.exports={getUserProfile,getAllUsers,deleteUser}