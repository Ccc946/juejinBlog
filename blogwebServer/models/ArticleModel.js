const Sequelize = require('sequelize');
const sequelize = require('../config/sequelizeBase');

const ArticleModel = sequelize.define('article',{
    id:{
        type:Sequelize.BIGINT,
		primaryKey:true,
		allowNull:false,
		autoIncrement:true
    },
    author:{
        type:Sequelize.STRING(32),
        allowNull:false
    },
    category:{
        type:Sequelize.STRING(32),
        allowNull:false
    },
    title:{
        type:Sequelize.STRING(255),
        allowNull:false
    },
    content:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    like:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    comment:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    createtime:{
        type:Sequelize.DATE,
        allowNull:false
    }
},
{
    timestamps:false,
});

module.exports = ArticleModel;