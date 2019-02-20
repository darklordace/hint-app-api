const handleGetHints = (db) => (req, resp) => {
    resp.json({ hintLst: db.map(val => val.hintId) });
}

module.exports = {
    handleGetHints: handleGetHints
}