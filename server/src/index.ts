import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema/index";
import cors from "cors";
import { createConnection } from "typeorm";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "GraphqlCRUD",
    username: "root",
    password: "963741",
    logging: true,
    synchronize: true,
    entities: [],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
   app.use('/graphql', graphqlHTTP({
     schema,
     graphiql: true
   }))

  app.listen(5000, () => {
    console.log("Server is up and running on port 5000");
  });
};

main().catch((err) => {
  console.log(err);
});
