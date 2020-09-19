const db = require('../db/db_config');

// method to get all of locals in the Locales table
const getByEmail = async (email)=>{
    try{
        const admin = await db.Admin.findOne({
            raw:true,
            where: {email:email}
        });
        return admin;
    }catch (error){
        console.log(error)
        throw Error(error)
    }
};

module.exports = {getByEmail}