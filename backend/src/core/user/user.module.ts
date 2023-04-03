import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { DatabaseModule } from '../database/database.module';
import { usersProviders } from './user.providers';

@Module({
  imports: [ DatabaseModule ],
  controllers: [ UserController ],
  providers: [  ],
  exports: [ ]
})
export class UserModule {
}
