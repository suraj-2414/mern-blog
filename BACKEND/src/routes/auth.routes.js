const authRouter = require('express').Router()
const  authControllers = require ("../controllers/auth.controllers")


/**
 * POST /api/auth/register
 */
 authRouter.post("/register",authControllers.register )
/**
 * POST /api/auth/login
 */
authRouter.post("/login",authControllers.login)
/**
 * GET /api/auth/refreshToken
 */
authRouter.get("/refreshToken",authControllers.refreshToken)
/**
 * POST  /api/auth/logout
 */
authRouter.post("/logout",authControllers.logout)

module.exports = authRouter