const db = require('../db/db_config');

// method to get all of locals in the Locales table
const getLocales = async ()=>{
    try{
        const locales = await db.Locales.findAll();
        return locales;
    }catch (error){
        console.log(error)
        throw Error(error)
    }
};

// method to add a new local to the Locales table
const addLocal = async (local)=>{
    try {
        await db.Locales.create(local);
        return true;
    }catch (error){
        console.log(error)
        throw Error(error)
    }
};

// method to find a only one of the element of the Locales table
const getLocal = async (numLocal) =>{
    try {
        const local = await db.Locales.findOne({
            raw: true,
            where:{numLocal:numLocal}
        });
        return local;
    }catch (error){
        console.log(error)
        throw Error(error)
    }
};

// methot to update infoamtion in one of the elements in Locales table
const updateLocal = async (numLocal,local)=>{
    try {
        await db.Locales.update(local, {
            where: {numLocal:numLocal}
        });
        return local
    }catch (error){
        console.log(error)
        throw Error(error)
    }
};

// Method to delate on of the elements in Locales table
const delateLocal = async (numLocal)=>{
    try {
        await db.Locales.destroy({
            where: {numLocal:numLocal}
        });
        return true;
    }catch (error){
        console.log(error)
        throw Error(error)
    }
};



module.exports = {
    getLocales,
    addLocal,
    getLocal,
    updateLocal,
    delateLocal
};