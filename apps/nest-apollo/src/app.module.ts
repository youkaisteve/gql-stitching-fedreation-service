import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    // GraphQLGatewayModule.forRoot({
    //   server: {
    //     cors: true,
    //   },
    //   gateway: {
    //     serviceList: [
    //       { name: 'user', url: 'http://localhost:3001/graphql' },
    //       { name: 'application', url: 'http://localhost:3002/graphql' },
    //     ],
    //   },
    // }),
  ],
})
export class AppModule {}