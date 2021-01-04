import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User, { name: 'user' })
  async getUser(@Args('id', { type: () => ID }) id: number) {
    return this.usersService.findOne(id);
  }
}
