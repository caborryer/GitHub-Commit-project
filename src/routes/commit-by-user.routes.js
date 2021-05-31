import express from 'express';
import {getCommitForSpecificUser} from "../controllers/commit-by-user.controller";

const router = express.Router();

router.route('/')
    .get(getCommitForSpecificUser);


module.exports = router;
