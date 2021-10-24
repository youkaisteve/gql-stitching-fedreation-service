import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { Application } from "./application.entity";

@ObjectType()
@Directive('@key(fields:"id")')
export class User {
    @Field(() => Int)
    @Directive('@external')
    id: number

    @Field(() => Application)
    application?: Application;
}