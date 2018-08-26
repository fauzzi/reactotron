import { ObjectType, Field, Int, ArgsType } from "type-graphql"
import * as GraphQLJSON from "graphql-type-json"

@ObjectType()
export class Command {
  @Field()
  clientId: string

  @Field()
  date: Date

  @Field()
  type: string

  @Field()
  deltaTime: number

  @Field()
  important: boolean

  @Field(() => Int)
  messageId: number

  @Field(() => GraphQLJSON)
  payload: object
}

@ArgsType()
export class CommandAddedArgs {
  @Field({ nullable: true })
  clientId?: string

  @Field(() => [String], { nullable: true })
  filter?: string[]
}