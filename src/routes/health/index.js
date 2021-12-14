const getHealth = (req, res) => {
    res.send({ success: true });
};

module.exports = [
    {
        path: "/v1/health",
        method: "get",
        handler: getHealth
    }
];