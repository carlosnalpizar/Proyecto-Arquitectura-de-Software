import {database} from '../db.js'


export const getAllHabitaciones = async (req,res)=>{
    try{
        const [resultado] = await database.query("SELECT * FROM habitaciones")
        res.json(resultado)
    } catch(error) {
            return res.status(500).json({message:error.message})
    }
};

export const updateHabitaciones = async (req,res)=>{
    try{
    const {idHabitaciones, Nombre, Apellido1, Apellido2}=req.body
    const [resultado] = await database.query("UPDATE persona SET Nombre = ?, Apellido1 = ?, Apellido2 = ? where Cedula = ?", [Nombre, Apellido1, Apellido2,req.params.ced])
    if (resultado.affectedRows === 0){
        return res.status(404).json({message:"You didnt affect rows"})
    }
    res.json(resultado)
    }catch(error) {
        return res.status(500).json({message:error.message})
}
};