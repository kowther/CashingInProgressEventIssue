const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # the both queries return an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    books2: [Book]
  }
`;




// Both resolvers retrieve books from the "books" array above using two
// separate methods that call the same datasource and url endpoint to
// retrieve the same data
const resolvers = {
    Query: {
        books: (_, __, { dataSources }) =>
             dataSources.dataSource.getBooks(),
        books2: (_, __, { dataSources }) =>
            dataSources.dataSource.getBooks2()
    },
};

const DataSource = require('./datasource');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        dataSource: new DataSource()
    })
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

