module.exports = (sequelize, DataTypes) => {
    let Student = sequelize.define('Student', {
        name:  {
            type: DataTypes.STRING
        },
        starID: {
            type: DataTypes.STRING
        },
        present: {
            type: DataTypes.BOOLEAN
        }
    })
        //force specifies whether to drop the table or not
        //true = drop table everytime app restarts
        //false = keep table
    Student.sync({force: false}).then(() => {
        console.log('Synced student table')
    })

    return Student
}