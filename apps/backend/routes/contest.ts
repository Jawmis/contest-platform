import { Router } from "express";

const router = Router();

router.get("/active", (req, res) => { 
    const { offset, page } = req.query;
    
});
router.get("/finished", (req, res) => { 
    let { offset, page } = req.query;
    
});

//return all the subchallanges and their start times.

router.post("/:contest", (req, res) => { 
 const constestId = req.params.contest;
});

router.post("/:contest/:challengeId", (req, res) => { 
 const constestId = req.params.contest;
});

router.get("/leaderboard/:contestId", (req, res) => {
    
})
router.post("/submit/:challengeid", (req, res) => {
    
})

export default router;