
import { Controller, Get, Post,Body, UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { User } from './user.entity';

import { PostDTO, cmd } from "./dto/post.dto";
import { InjectMysql, Mysql } from 'mysql2-nestjs';
import { emit } from 'cluster';




@Controller('user')
export class UserController {

    constructor(@InjectMysql() private readonly mysql: Mysql) {

    }


    @Post("/addMultiple")
    async addMultiple(@Body() body: PostDTO) {
        var cmd:cmd;
        var values = [];
        var statusCode = "";
       
        for(var i=0; i< body.cmd_chain.length; i++){

            var value:string = body.cmd_chain[i].cmd.split('VALUES')[1];
            value = value.replace(';','');
            values.push(value);

            try{
                
                statusCode = "ok";
                const [result, fields] = await this.mysql.query(body.cmd_chain[i].cmd);
              
            }

            catch(e){
                statusCode = "error";
                console.log(e); 
            }
       
        }


        return {"status": statusCode,
        "dbState":values};
       

      
    }
}