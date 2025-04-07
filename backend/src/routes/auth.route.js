import { Router } from "express";

const router = Router();

router.post('/callback',(req,res)=>{
    res.send('auth route will get method');
});

export default router;