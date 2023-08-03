/* /api/auth.js */
import { verifyToken } from 'utils/authentication'

export default async function getUserInfo(req, res) {
    const { method, body } = req

    switch (method) {
        case 'POST':
            try {
                const { token } = body
                const data = verifyToken(token)
                return res.status(200).json({"privilegies": data})
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }
        default:
            return res.status(400).json("invalid request")
    }
}
//isti
//iti
//item
//itma
//lmi
//lag