import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { UserResolvers } from './user.resolver';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
    imports: [
        GraphQLFederationModule.forRoot({
            autoSchemaFile: true,
            buildSchemaOptions: {
                orphanedTypes: [User]
            }
        }),
    ],
    providers: [UserResolvers, UserService],
})
export class UserModule { };