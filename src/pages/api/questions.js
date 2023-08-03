import { conn } from 'utils/database'

export default async function questions(req, res) {
    const { method, body } = req

    switch (method) {
        case 'GET':
            try {
                const response = await conn.query('SELECT * FROM sections')
                if (response.rowCount === 0) {
                    throw new Error('Invalid query!')
                }
                return res.status(200).json({"result":response.rows})
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }
        case 'POST':
            try {
                const { type } = body
                let query
                if (type === 'sections') {
                    query = 'SELECT * FROM sections'
                } else if (type === 'questions') {
                    query = 'SELECT * FROM questions'
                } else {
                    query = 'SELECT a.section_id a.section_name a.section_description b.question_id, b.question_alias, b.question_text, b.question_type, b.question_placeholder, b.question_requiered, b.question_biniding FROM sections AS a INNER JOIN questions AS b ON a.section_id = b.section_id'
                }
                const response = await conn.query(query)
                if (response.rowCount === 0) {
                    throw new Error('Invalid query!')
                }
                return res.status(200).json({"result" : response.rows})
            } catch (error) {
                console.log(error)
                return res.status(400).json({ error: error.message })
            }
        default:
            return res.status(400).json("invalid request")
    }
}