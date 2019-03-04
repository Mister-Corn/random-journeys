const { GraphQLServer } = require('graphql-yoga');

// Static Dummy Data to Start
let links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }
];

let idCount = links.length;

const resolvers = {
  Query: {
    info: () => `This is the API for the GraphQL Tutorial`,
    feed: () => links,
    link: (parents, args) => {
      const result = links.filter(link => link.id === args.id);
      return result.length ? result[0] : null;
    }
  },
  Mutation: {
    post: (parents, args) => {
      const link = {
        id: `link-${idCount}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
    },
    updateLink: (parents, args) => {
      let updatedLink;
      links = links.map(link => {
        if (link.id === args.id) {
          updatedLink = { ...link, ...args };
          return updatedLink;
        }
        return link;
      });
      return updatedLink;
    }
  }
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
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
