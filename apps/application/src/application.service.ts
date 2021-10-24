import { Injectable } from "@nestjs/common";
import { Application } from "./application.entity";

const applications: Application[] = [{
    id: 1,
    appName: 'app1',
    appKey: '111',
    appSecret: 'xxx',
    userId: 1
}]
@Injectable()
export class ApplicationService {
    async getForUserId(userId: number): Promise<Application> {
        return applications.find(x => x.userId === userId)
    }

    async getById(id: number): Promise<Application> {
        return applications.find(x => x.id === id)
    }

    async getAll(): Promise<Application[]> {
        return applications
    }
}