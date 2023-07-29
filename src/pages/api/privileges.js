import { conn } from 'connection'

export default async function privilegeManager (req, res) {
    const { method, body } = req

    switch (method) {
        case 'GET':
            return
        case 'POST':
            return
        case 'PUT':
            return
        case 'DELETE':
            return
        default:
            return res.status(400).json("invalid request")
    }
}