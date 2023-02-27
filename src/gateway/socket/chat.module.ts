import { SocketGateway } from './socket.gateway';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    providers: [SocketGateway],
})
export class ChatModule {}
