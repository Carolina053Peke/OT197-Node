//Se deberia requerir la base de datos para verificar si el usuario es admin
const db=require('../database/models');

function checkAdmin(req,res,next){
    if(req.session.user){
        db.Usuario.findOne({
            where:{
                roleID:1,
            },
        })
        .then((user)=>{
            //En el modelo Usuario, el campo admin deberia ser un boolean, si es true, es admin
            if(user.isAdmin==1){
                next();
            }else{
                //Si no es admin, mostrara un mensaje de error.
                res.status(400).json({message:'No tienes permisos para acceder a esta pagina'});
            }
        })
        .catch((error)=>{
            console.log(error);
        })   
    } else{
        res.status(400).json({message:"No tienes permisos para acceder a esta pagina"});
    }
}

module.exports=checkAdminMid;