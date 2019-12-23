const Sequelize = require('sequelize');
const sequelize = require('../config/sequelizeBase');

const CommentModel = sequelize.define('comment',{
    id:{
        type:Sequelize.BIGINT,
		primaryKey:true,
		allowNull:false,
		autoIncrement:true
    },
    article_id:{
        type:Sequelize.BIGINT,
        allowNull:false
    },
    user_id:{
        type:Sequelize.BIGINT,
        allowNull:false
    },
    infomation:{
        type:Sequelize.STRING(255),
        allowNull:false
    },
    createtime:{
        type:Sequelize.DATE,
        allowNull:false
    },
    name:{
        type:Sequelize.STRING(255),
        allowNull:false
    }
},{
    timestamps:false
});

module.exports = CommentModel;