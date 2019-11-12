const express = require('express');
const router = express.Router();
//const expressGraphql = require('express-graphql');
//const app = express();

var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};


router.get('/', function(req, res) {
	//console.log(__dirname);
	//process.exit();  die
    res.sendFile(__dirname + '/client/index.html');
});

router.use('/graphql', graphqlHTTP({
	  schema: schema,
	  rootValue: root,
	  graphiql: true,
}));
module.exports = router;
//export default router;