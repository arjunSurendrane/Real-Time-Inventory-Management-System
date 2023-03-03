/**
 * Connect To Localhost
 * @param {Function} app - express function 
 */
const connectToLocalhost = async (app) => {
    await app.listen(process.env.PORT, () => {
        console.log(`Connected to localhost :${process.env.PORT}`)
    })
}
export default connectToLocalhost;

