import * as mysql from 'mysql'  //import mysql lib
import config from '../config'  //import database configuration, as password/user ..

import Telemetry from './telemetry';

export const Connection = mysql.createConnection(config.mysql);

Connection.connect(err =>{
    if(err){
        console.log(err);
    }
})

export default{
    Telemetry
}