const express=require("express")
const router=express.Router();
const userController=require("../controllers/user.controller.js")

router.get("/profile",userController.getUserProfile);
router.get("/",userController.getAllUsers);

router.delete("/:userId", userController.deleteUser);

module.exports=router;

