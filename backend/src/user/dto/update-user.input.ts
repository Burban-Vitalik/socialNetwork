import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  email?: string;
  @Field(() => String, { nullable: true })
  password?: string;
}
