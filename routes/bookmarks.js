const express = require('express');
const Bookmark = require('../models/bookmark');
const router = express.Router();

// GET /bookmarks (R)
router.get('/', (req, res) => {
  Bookmark.find().then(
    bookmarks => res.json(bookmarks)
  ).catch(
    error => res.status(500).json({ error: error.message })
  )
})


module.exports = router
