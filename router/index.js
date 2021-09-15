const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get('/lk', (req, res) => {
    res.send('Hello LK!')
})

module.exports = router;