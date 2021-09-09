module.exports = {
    sql: {
      database : 'practice',
      port     : '3306',
      username : 'root',
      password : 'password',
      dialect  : 'mysql',      // PostgreSQL, MySQL, MariaDB, SQLite and MSSQL See more: http://docs.sequelizejs.com/en/latest/
      logging  : false,
      timezone : '+05:00',
      define   : {
        paranoid        : false,
        underscored     : true,
        freezeTableName : false,
        /*charset: 'utf8',
         dialectOptions: {
         collate: 'utf8_general_ci'
         },*/
        timestamps : true,
      },
    },
    db : "sql",   // mongo,sql-dump if you want to use any SQL change dialect above in sql-dump config
  };
  