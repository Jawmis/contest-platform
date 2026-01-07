import { Router } from "express";
import {SignupSchema} from "../types";
const router = Router();

router.post("/signin", (req, res) => { 
    const { success, data } = SignupSchema.safeParse(req.body);
    if (!success) {
        res.status(411).json({ message : "Invalid format" });
        
    }

    


 });


export default router;