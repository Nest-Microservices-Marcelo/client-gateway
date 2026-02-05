import { Module } from '@nestjs/common';
import { AuthsController } from './auths.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [AuthsController],
  imports: [NatsModule],
})
export class AuthsModule {}
