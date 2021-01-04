import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User, userInput } from './users.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  async getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user', nullable: true })
  async getUser(@Args('id', { type: () => ID }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('userData') userData: userInput) {
    return await this.usersService.createUser(userData);
  }
}
