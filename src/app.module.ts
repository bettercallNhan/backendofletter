// import { UserModule } from './module/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './gateway/socket/chat.module';

@Module({
//   imports: [MongooseModule.forRoot('mongodb+srv://nhanvip123:0913533637Nhan@cluster0.maxhnhe.mongodb.net/shop'), ChatModule,
//   // UserModule
// ],
  imports: [ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
