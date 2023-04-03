import { Module } from '@nestjs/common';
import { UserModule } from './core/user/user.module';
import { NestMysql2Module } from 'mysql2-nestjs';

@Module({
  imports: [  NestMysql2Module.register({
    host: "localhost",
    port: 3306,
    database: "nesttest",
    user: "root",
    password: ""
  }), UserModule],
})
export class AppModule {
}
