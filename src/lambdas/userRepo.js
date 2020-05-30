const main = require('../templates/main')
const axios = require('axios')
require('dotenv').config()

const gitHub = async ({ body }) => {
    const { userName } = body
    const url = `https://api.github.com/users/${userName}/repos`
    console.log(url)
    const config = {
        method:'GET',
        url,
    }
    try {
        const result = await axios(config)
        return {
            statusCode: 200,
            body: JSON.stringify(result.data)
        }
    } catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: JSON.stringify('Erro ao consultar o user!!')
        }
    }
}

module.exports = { handler: main(gitHub) }