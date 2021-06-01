import log4js from "log4js";
import axios from "axios";

const logger = log4js.getLogger();


export async function connectWithGitHubApi(username, repoName) {

    let URL = `https://api.github.com/repos/${username}/${repoName}/commits`;
    let config = {
        headers: {
            'Authorization': process.env.TOKEN,
        }
    };

    return axios.get(URL, config)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            logger.error(`[connectWithGitHubApi] ${error}`);
            return null;
        });
    logger.debug(`[connectWithGitHubApi] FINISHED`);
}
