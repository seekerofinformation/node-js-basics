module.exports = (req, res) => {


    if (req.body) {
        req.body = JSON.parse(req.body)
    }
}