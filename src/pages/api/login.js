import { conn } from 'utils/database'
import { generateToken } from 'utils/authentication'

export default async function userLogin(req, res) {
    const { method, body } = req

    switch (method) {
        case 'POST':
            try {
                const { user, password } = body.data
                const query = 'SELECT * FROM users WHERE user_email = $1 AND user_password = $2'
                const values = [user, password]
                const response = await conn.query(query, values)
                if (response.rowCount === 0) {
                    throw new Error('Invalid user credentials!')
                }
                const token = generateToken(response.rows[0]) 
                return res.status(200).json({"token": token})
            } catch (error) {
                console.log(error)
                return res.status(400).json({ error: error.message })
            }
        default:
            return res.status(400).json("invalid request")
    }
}