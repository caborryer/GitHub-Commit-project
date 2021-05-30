

export const errorsConstants = {
    COMMITS_NOT_FOUND: "GAME_NOT_FOUND",
    COMMITS_NOT_FOUND_CODE: 44,

};

export function throwError(message, code){
    const error = new Error(message);
    error.code = code;
    throw error;
}
