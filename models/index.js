//keeps track of models

let {Sequelize, DataTypes } = require('sequelize')

let env = process.env.NODE_ENV || 'development'
//if app is running at Heroku, Heroku will have set an enviroment
//variable called NODE_ENV which will have the value 'production'
//so the env in this code will be 'production'

//if the app is running on your computer, env will be 'development'
//app will use SQLite

let config = require(__dirname + '/../config.json')[env]

let db = {}

let sequelize

//set new sequelize config variables
if (config.use_env_variable) {
    // at Heroku, use postgress
    sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
    //running locally, development mode, use SQLite
    sequelize = new Sequelize(config)
}

let studentModel = require('./student')(sequelize, DataTypes)
db[studentModel.name] = studentModel

db.sequelize = sequelize // information on how to connect to database
db.Sequelize = Sequelize // reference to sequelize library

module.exports = db
