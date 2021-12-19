import { Item } from '@my-monorepo/common';
import { ObjectType, Field, Int, } from '@nestjs/graphql';

@ObjectType()
export class Todo implements Item {
  @Field(() => String)
  name: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;
}
