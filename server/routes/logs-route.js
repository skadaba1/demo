// bookshelf-app/server/routes/books-route.js

// Import express
const express = require('express')

// Import books-controller
const logsRoutes = require('./../controllers/logs-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all book
// In server.js, books route is specified as '/books'
// this means that '/all' translates to '/books/all'
router.get('/all', logsRoutes.logsAll)

// Add route for POST request to create new book
// In server.js, books route is specified as '/books'
// this means that '/create' translates to '/books/create'
router.post('/create', logsRoutes.logsCreate)

// Add route for PUT request to delete specific book
// In server.js, books route is specified as '/books'
// this means that '/delete' translates to '/books/delete'
router.put('/delete', logsRoutes.logsDelete)

// Add route for PUT request to delete specific book
// In server.js, books route is specified as '/books'
// this means that '/delete' translates to '/books/delete'
router.put('/deleteAll', logsRoutes.logsDeleteAll)

// Add route for PUT request to reset bookshelf list
// In server.js, books route is specified as '/books'
// this means that '/reset' translates to '/books/reset'
router.put('/reset', logsRoutes.logsReset)

// Add route for Get request one log
// In server.js, books route is specified as '/books'
// this means that '/reset' translates to '/books/reset'
router.get('/last', logsRoutes.fetchLatestEntry)

// Add route for Put request one log update
// In server.js, books route is specified as '/books'
// this means that '/reset' translates to '/books/reset'
router.put('/update', logsRoutes.updateEntry)

// Add route for Put request one log update
// In server.js, books route is specified as '/books'
// this means that '/reset' translates to '/books/reset'
router.get('/one', logsRoutes.fetchOne)

// Export router
module.exports = router