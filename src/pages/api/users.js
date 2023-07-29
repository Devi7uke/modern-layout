import { conn } from 'connection'

export default async function userManager(req, res) {
    const { method, body } = req

    switch (method) {
        case 'GET':
            try {
                const response = await conn.query('SELECT * FROM users')
                return res.status(200).json(response.rows)
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }
        case 'POST':
            try {
                const { username, password, name, email, level } = body
                const query = 'INSERT INTO users (user_username, user_password, user_fullname, user_email, user_level) VALUES ($1, $2, $3, $4, $5) RETURNING *'
                const values = [username, password, name, email, level]
                const response = await conn.query(query, values)
                return res.status(200).json(response.rows[0])
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }
        case 'PUT':
            try {
                const {id ,username, password, name, email, level } = body
                const query = 'UPDATE users SET user_username = $2, user_password = $3, user_fullname = $4, user_email = $5, user_level = $6 WHERE user_id = $1 RETURNING *'
                const values = [id, username, password, name, email, level]
                const response = await conn.query(query, values)
                if (response.rowCount === 0) {
                    throw new Error('User with the specified ID was not found!')
                }
                return res.status(200).json({message: 'User updated successfully!'})
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }
        case 'DELETE':
            try {
                const {id} = body
                const query = 'DELETE FROM users WHERE user_id = $1'
                const values = [id]
                const response = await conn.query(query, values)
                if (response.rowCount === 0) {
                    throw new Error('User with the specified ID was not found!')
                }
                return res.status(200).json({message: 'User deleted successfully!'})
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }
        default:
            return res.status(400).json("invalid request")
    }
}

/*
GET     ->  SELECT

POST    ->  INSERT

PUT     ->  UPDATE

DELETE  ->  DELETE
*/