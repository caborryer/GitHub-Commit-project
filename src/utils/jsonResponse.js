import httpStatus from "http-status";


function mergeDefaultResponse(data, message, statusCode, error = null) {
    return {
        message: message,
        success: true,
        statusCode: statusCode,
        data: data,
        error: error ? {code: error.code, message: error.message} : null
    };
}

export function success(res, data, error = null) {
    return res.json(mergeDefaultResponse(data, 'OK', httpStatus.OK));
}

export function updated(res, data, error = null) {
    return res.json(mergeDefaultResponse(data, 'UPDATED', httpStatus.OK));
}

export function deleted(res, data, error) {
    return res.json(mergeDefaultResponse(data, 'DELETED', httpStatus.OK));
}

export function badRequest(res, error) {
    return res.json(mergeDefaultResponse(null, 'BAD_REQUEST', httpStatus.BAD_REQUEST, error));
}

export function unauthorized(res, error) {
    return res.json(mergeDefaultResponse(null, 'UNAUTHORIZED', httpStatus.UNAUTHORIZED, error));
}

export function forbidden(res, error) {
    return res.json(mergeDefaultResponse(null, 'FORBIDDEN', httpStatus.FORBIDDEN, error));
}

export function notFound(res, error) {
    return res.json(mergeDefaultResponse(null, 'NOT_FOUND', httpStatus.NOT_FOUND, error));
}
