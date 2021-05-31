import log4js from 'log4js';
import * as ResponseUtil from "../utils/jsonResponse";
import {connectWithGitHubApi} from "../services/git-hub-commit.service";


const logger = log4js.getLogger();
logger.level = process.env.LOGGER_LEVEL;


export async function getCommitForSpecificUser(req, res) {
    logger.info("[getCommitForSpecificUser] INIT");
    try {
        const {userName, repoName} = req.body;
        const totalRepos = await connectWithGitHubApi(userName, repoName);
        ResponseUtil.success(res, { totalRepos});
    } catch (error) {
        logger.info("[getCommitForSpecificUser]  ERROR", error);
        ResponseUtil.badRequest(res, error);
    }
    logger.info("[getCommitForSpecificUser] FINISHED");
}
