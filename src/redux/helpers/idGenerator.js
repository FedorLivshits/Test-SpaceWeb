export const generateId = () => {
    return (
        Math.random().toString(32).substring(2, 10) + (+new Date()).toString(32)
    )
}