const express = require("express");
const localesModel = require ('../models/locales');
const router = express.Router();

//get all elements of db primaveras
router.get('/', async (req,res)=>{
    try {
        const locales = await localesModel.getLocales();
        res.json(locales); // status 200
    } catch (error) {
        res.status(500).json({error:error.message})
    }    
});
// add new local.... structure of the json to de end of this window
router.post('/', async (req,res)=>{
    try {
        const local = req.body;
        await localesModel.addLocal(local);
        res.status(201).json({success:true})        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
});
// get only one local in the table
router.get('/:numLocal', async (req,res)=>{
    try {
        const numLocal = req.params.numLocal;
        const local = await localesModel.getLocal(numLocal);
        res.json(local) //status 200             
    } catch (error) {
        res.status(500).json({error:error.message})
    }
});
// edit information of the one local
router.put('/update/:numLocal', async (req,res)=>{
    try {
        const numLocal = req.params.numLocal;
        const local = req.body;
        await localesModel.updateLocal(numLocal,local);
        res.sendStatus(204);        
    } catch (error) {
        res.status(500).json({error:error.message})
    }    
});
// delet all infoamtion of the one local
router.delete('/delate/:numLocal',async (req,res)=>{
    try {
        const numLocal = req.params.numLocal
        await localesModel.delateLocal(numLocal)
        res.sendStatus(204);        
    } catch (error) {
        res.status(500).json({error:error.message})
    }    
});


module.exports = router;

/*
{
    "numLocal":"4",
	"name": "Plancha Lav",
    "description": "Lavanderia y tintoretia",
    "contact": "31212",
    "email": "planchalav@demo.com",
    "image": "../public/images/demo.jpg",
    "rent": 500,
    "pay_day": "1/mes",
    "p_water": false,
    "open": true,
    "monday": "8:00-21:00",
    "tuesday": "8:00-21:00",
    "wednesday": "8:00-21:00",
    "thursday": "8:00-21:00",
    "friday": "8:00-21:00",
    "saturday": "8:00-21:00",
    "sunday": "8:00-21:00"
  }
*/ 