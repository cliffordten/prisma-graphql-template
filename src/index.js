import { GraphQLServer, PubSub} from 'graphql-yoga';
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'

const resolvers = {
  Query,
  Mutation,
  Subscription
}

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    pubsub
  }
})

server.start(()=>{
  console.log('server is up')
})