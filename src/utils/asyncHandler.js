const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }
}

export {asyncHandler};






/* method2 :
creation of asyncHandler in three steps :  
1. const asyncHandler = () => {}
2. const asyncHandler = (fn) => () => {}
3. const asyncHandler = (fn) => async () => {}

next : is a flag to next middlewares
 const asyncHandler = (func) => async (req, res, next) => {
    try {
    await fn (req, res, next)}
    catch (error) {
        res.status(err.code || 400 ).json({
        success : false,
        message : err.message
        })
    }
}
*/ 