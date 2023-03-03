
/**
 * AppError class extend from error. It is used to create custom error
 */
class AppError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor)
    }
}


export default AppError;