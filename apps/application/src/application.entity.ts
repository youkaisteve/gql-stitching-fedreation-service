import { Field, Int, ObjectType ,Directive} from "@nestjs/graphql";
import { User } from "./user.entity";

@ObjectType()
@Directive('@key(fields: "id")')
export class Application {
    @Field(type => Int)
    id: number;
    @Field()
    appName: string;
    @Field()
    appKey: string;
    @Field({ nullable: true })
    appSecret?: string;
    @Field()
    userId: number;
    @Field(() => User)
    user?: User;
}