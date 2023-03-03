
/**
 * This catchAsync method is applied to handle async function errors.
 * @param {Function} fn 
 * @returns {Function} - this function is used to send error to global error handling middleware
 */
const catchAsync = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(error => {
            next(error)
        })
    }
}
export default catchAsync

