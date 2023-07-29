import { conn } from 'connection'

export default async function userLogIn(req, res) {
    const { method, body } = req

    switch (method) {
        case 'POST':
            try {
                const { user, password } = body
                const query = 'SELECT * FROM users WHERE user_email = $1 AND user_password = $2'
                const values = [user, password]
                const response = await conn.query(query, values)
                return res.status(200).json({"data": response.rows, "coincidences" : response.rowCount})
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }
        default:
            return res.status(400).json("invalid request")
    }
}