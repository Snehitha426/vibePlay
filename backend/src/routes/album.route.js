import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
    res.send('album route will get method');
});

export default router;