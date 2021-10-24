import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Application } from "./application.entity";
import { ApplicationService } from "./application.service";
import { User } from "./user.entity";

@Resolver(() => Application)
export class ApplicationResolvers {
    constructor(private readonly applicationService: ApplicationService) { }

    @Query(() => Application)
    async application(@Args('id') id: number): Promise<Application> {
        return this.applicationService.getById(id);
    }

    @Query(() => [Application])
    async all(): Promise<Application[]> {
        return this.applicationService.getAll()
    }

    @ResolveField(() => User)
    user(@Parent() app: Application): any {
        return { __typename: 'User', id: app.userId }
    }
}