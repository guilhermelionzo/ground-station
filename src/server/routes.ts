import * as express from 'express';
import DB from './db'
import db from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/telemetry', async(req,res)=>{
    
    try{
        let telemetry = await db.Telemetry.all();
        res.json(telemetry);
    }catch(e){
        
        console.log(e);
        res.sendStatus(500);

    }

})

export default router;