const Sequelize = require('sequelize');
const sequelize = require('../config/sequelizeBase');

const UserModel = sequelize.define('user', {
    id:{
        type:Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username:{
        type:Sequelize.STRING(64),
        allowNull:false
    },
    phone:{
        type:Sequelize.STRING(25),
        unique: true,
        allowNull: false
    },
    password:{
        type:Sequelize.STRING(255),
        allowNull: false
    },
    headimg:{
        type:Sequelize.STRING(255),
        allowNull:false,
        defaultValue: 'http://tvax4.sinaimg.cn/crop.0.0.480.480.180/768c39d5ly8fjje1d0teej20dc0dcq35.jpg',
    },
    email:{
        type:Sequelize.STRING(64),
        allowNull:true
    },
    updatetime:{
		type:Sequelize.DATE,
		allowNull:false
	},
	createtime:{
		type:Sequelize.DATE,
		allowNull:false
	},
},
{
    timestamps: false,
});

module.exports = UserModel;