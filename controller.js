const Students=require("./db_schema/student.js")


exports.getStudents=async (req,res)=>{
    try {
        const student= await Students.find()
        return res.status(200).json({message:"successfully got the data",student})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"internal server error"})

        
    }

}

exports.postStudents=async(req,res)=>{

    try {
        const newstudent=await new Students({...req.body}).save()
    
        return res.status(200).json({message:"successfully got the data",newstudent})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"internal server error"})
    }




}

exports.editStudents=async(req,res)=>{
    try {
        const editstudent=await Students.findByIdAndUpdate(
            {_id:req.params.id},{$set:req.body},{new:true}
        )
        return res.status(200).json({message:"successfully edited the data",editstudent})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"internal server error"})
        
    }
}


exports.deletestudents=async(req,res)=>{
    try {
        const deletestudent= await Students.findByIdAndDelete(
            {_id:req.params.id}
        )
        return res.status(200).json({message:"successfully deleted"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"internal server error"})
    }
}
