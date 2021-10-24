import { Args, Query, Resolver, ResolveReference } from "@nestjs/graphql";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolvers {
    constructor(private readonly userService: UserService) { }

    @Query(() => User)
    async getUser(@Args('id') id: number): Promise<User> {
        return this.userService.get(id);
    }

    /**
     * 提供外部引用的User类型字段的数据
     * @param reference 引用的resolver返回的对象，如{ __typename: 'User', id: app.userId }
     * @returns 
     */
    @ResolveReference()
    async resolveReference(reference: { __typename: string; id: number }): Promise<User> {
        return this.userService.get(reference.id)
    }
}