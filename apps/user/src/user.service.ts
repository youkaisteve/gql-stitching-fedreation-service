import { Injectable } from "@nestjs/common"
import { User } from "./user.entity"

const users = [{
    id: 1,
    name: "user1"
}, {
    id: 2,
    name: "user2"
}, {
    id: 3,
    name: "user3"
}]
@Injectable()
export class UserService {
    async get(id: number): Promise<User> {
        return users.find(x => x.id === id)
    }
}