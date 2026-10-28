/**
 * Punto de entrada Serverless para Vercel (Node.js runtime).
 * Reutiliza y exporta la aplicación Express principal sin iniciar app.listen().
 */
const app = require("../index.js");

module.exports = app;
