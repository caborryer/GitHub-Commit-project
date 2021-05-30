import log4js from "log4js";
import axios from "axios";

const logger = log4js.getLogger();


export async function syncWithExternalSystem(username, repoName) {

    let URL = `https://api.github.com/repos/${username}/${repoName}/commits`;;
    return axios.get(URL)
        .then(response => {
            logger.debug(`[syncWithExternalSystem] RESPONSE ${JSON.stringify(response.data)}`);
            return response.data
        })
        .catch(error => {
            logger.error(`[syncWithExternalSystem] ${error}`);
            return null
        })
    logger.debug(`[syncWithExternalSystem] FINISHED`);
}
