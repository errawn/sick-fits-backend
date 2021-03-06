// This file connects to the remote db 
// and allows us to query it with JS
require('dotenv').config({ path: '.env' })

const { Prisma } = require('prisma-binding')

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_sECRET,
    debug: false,
})

module.exports = db