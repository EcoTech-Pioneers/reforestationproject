const mssql = require('mssql')
const dotenv = require('dotenv')
dotenv.config()


const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.SERVER_NAME,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis:  30001  
        
    },
    options:{
        encrypt: true,     
        trustServerCertificate: false
    }
    
}


mssql.connect(sqlConfig)
module.exports = {
    sqlConfig
}