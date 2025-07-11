import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Email address' })
  email: string;

  @Field(() => String, { description: 'Password' })
  password: string;
}
