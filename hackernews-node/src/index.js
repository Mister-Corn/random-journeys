const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const resolvers = {
  Query: {
    info: () => `This is the API for the GraphQL Tutorial`,
    feed: (root, args, context, info) => {
      return context.prisma.links();
    },
    // below not working
    link: (root, args, context, info) => {
      return context.prisma.link(args.id);
    },
  },
  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createLink({
        url: args.url,
        description: args.description,
      });
    },
    // updateLink: (parents, args) => {
    //   let updatedLink;
    //   links = links.map(link => {
    //     if (link.id === args.id) {
    //       updatedLink = { ...link, ...args };
    //       return updatedLink;
    //     }
    //     return link;
    //   });
    //   return updatedLink;
    // },
    // deleteLink: (parents, args) => {
    //   let deletedLink;
    //   links = links.filter(link => {
    //     const match = link.id === args.id;
    //     if (match) {
    //       deletedLink = link;
    //     }
    //     return !match;
    //   });
    //   return deletedLink;
    // }
  },
  // If your object key/value pairs map vis-a-vis with the type def,
  // the below isn't necessary: GraphQL/Prisma can figure it out
  // However, know the below is useful for more complex data shapes
  // or if you need to process the data before sending it to the client
  //   Link: {
  //       id: (parent) => parent.id,
  //       description: (parent) => parent.description,
  //       url: (parent) => parent.url,
  //   }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
