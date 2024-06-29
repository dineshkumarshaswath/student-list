const express=require("express")
const { getStudents, postStudents, editStudents, deletestudents } = require("./controller")

const router=express.Router()

router.route("/students").get(getStudents)
router.route("/students/post").post(postStudents)
router.route("/students/edit/:id").put(editStudents)
router.route("/students/delete/:id").delete(deletestudents)




module.exports=router


