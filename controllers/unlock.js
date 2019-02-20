const handleUnlock = (db) => (req, resp) => {
    const { hintId, token } = req.body;

    for (i = 0; i < db.length; ++i) {
        if (db[i].hintId === hintId) {
            if (db[i].canUnlock && db[i].token === token)
                resp.json({ hintDesc: db[i].hintDesc });
            else
                resp.json("failed");
            return;
        }
    }
    
    resp.json("not found");
}

module.exports = {
    handleUnlock: handleUnlock
}