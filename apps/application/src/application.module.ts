import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { ExtendsDirective } from '@apollo/subgraph/dist/directives';
import { ApplicationResolvers } from './application.resolver';
import { ApplicationService } from './application.service';
import { UserResolvers } from './user.resolver';

@Module({
    imports: [GraphQLFederationModule.forRoot({
        autoSchemaFile: true,
        buildSchemaOptions: {
            schemaDirectives: { extends: ExtendsDirective }
        }
    }),],
    providers: [ApplicationResolvers, UserResolvers, ApplicationService],
})
export class ApplicationModule { };