/**
 * Global error handling middleware
 * @param {Object} err 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 */
export const errorHandling = (err, req, res, next) => {
    {
        console.log(typeof (next))
        if (err.status == 'fail') {
            res.status(err.statusCode).json({
                error: err
            })
        } else {
            console.log(err)
            res.status(500).json({
                status: 'Error',
            })
        }
    }
}