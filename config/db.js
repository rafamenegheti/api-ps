const { Sequelize } = require('sequelize')

async function connect() {

    const sequelize = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PASS, 
        {
            host: process.env.DB_HOST,
            dialect: 'mysql'
        }
    )

    try {
        // Sincroniza a aplicação com o BD
        await sequelize.sync() 
        console.log('Connection has been established successfully.')
        return sequelize
    } catch (error) {
        console.error('Unable to connect to the database:', error)
        process.exit(1)     // Encerra o servidor
    }

}

module.exports = connect()