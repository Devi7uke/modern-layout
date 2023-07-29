import { Pool } from 'pg'

let conn

if (!conn) {
    conn = new Pool({
        user: 'devi7uke',
        password: '123456',
        host: 'localhost',
        port: 5432,
        database: 'upslp'
    })
}

export { conn }