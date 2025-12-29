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
router.post("/submit/:challgengeId", (req, res) => {
    // have rate limiting here.
    // max 20 submissions per problem.
    // forward the request to GPT.
    // store the response in the sorted set and DB.
})

export default router;