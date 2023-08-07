import { conn } from 'utils/database'

export default async function questionManager(req, res) {
    const { method, body } = req
    const multipleChoiceElements = ['radio', 'checkbox', 'dropdown']
    const noPlaceholderElements = ['date']

    switch (method) {
        case 'GET':
            try {
                const response = await conn.query('SELECT * FROM questions')
                if (response.rowCount === 0) {
                    throw new Error('Invalid query!')
                }
                return res.status(200).json({ "result": response.rows })
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }
        case 'POST':
            try {
                const { section, question, alias, type, placeholder, options, requiered } = body.responses
                if (multipleChoiceElements.includes(type)) {
                    let query = 'INSERT INTO questions (section_id, question_alias, question_text, question_type, question_requiered) VALUES ($1, $2, $3, $4, $5) RETURNING *'
                    let values = [section, alias, question, type, requiered]
                    const question_response = await conn.query(query, values)
                    const question_index = question_response.rows[0].question_id
                    query = 'INSERT INTO options (question_id, option_text) VALUES ($1, $2) RETURNING *'
                    const options_response = []
                    options.forEach(async option => {
                        values = [question_index, option]
                        try {
                            const option_response = await conn.query(query, values)
                            options_response.push(option_response)
                        } catch (error) {
                            console.error('Something went wrong inserting an option:', error)
                        }
                    })
                    return res.status(200).json({
                        result: 'Successful insertion',
                        question: question_response.rows[0],
                        options: options_response.map((item) => (item.rows[0]))
                    })
                } else if (noPlaceholderElements.includes(type)) {
                    const query = 'INSERT INTO questions (section_id, question_alias, question_text, question_type, question_requiered) VALUES ($1, $2, $3, $4, $5) RETURNING *'
                    const values = [section, alias, question, type, requiered]
                    const response = await conn.query(query, values)
                    return res.status(200).json({ result: response.rows[0] })
                } else {
                    const query = 'INSERT INTO questions (section_id, question_alias, question_text, question_type, question_placeholder, question_requiered) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *'
                    const values = [section, alias, question, type, placeholder, requiered]
                    const response = await conn.query(query, values)
                    return res.status(200).json({ result: response.rows[0] })
                }
            } catch (error) {
                console.log(error)
                return res.status(400).json({ error: error.message })
            }
        default:
            return res.status(400).json("invalid request")
    }
}