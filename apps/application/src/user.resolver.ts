import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Application } from "./application.entity";
import { ApplicationService } from "./application.service";
import { User } from "./user.entity";

@Resolver(() => User)
export class UserResolvers {
    constructor(private readonly applicationService: ApplicationService) { }

    @ResolveField(() => Application)
    application(@Parent() user: User): Promise<Application> {
        return this.applicationService.getForUserId(user.id);
    }
}