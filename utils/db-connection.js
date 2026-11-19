const {Sequelize} = require('sequelize');
const connection = new Sequelize('appDB', 'root', 'Full$Moon@2000',{
    host: 'localhost',
    dialect: 'mysql'
});

(async ()=>{
    try{
        await connection.authenticate();
        console.log('connection to the database has made')
    }catch(error){
        console.log(error);
    }
})();

module.exports = connection;