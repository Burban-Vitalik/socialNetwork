import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  id: string;

  @Field(() => String, { description: 'Email' })
  email: string;

  @Field(() => String, { description: 'Password' })
  password: string;
}
