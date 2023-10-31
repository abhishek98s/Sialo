export const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
            return;
        } catch (err) {
            next(err)
            console.log(err.message)
        }
    }
}

export default asyncWrapper