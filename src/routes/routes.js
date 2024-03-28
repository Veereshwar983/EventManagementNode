import { UserHandler } from "../handlers";

export const routes = express();
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(cors());

export const startServer = (port = 3004) => {
  console.log("Server started successfully...");
  server = routes.listen(3004, () => {});
};

routes.post("/register", (request, response) => {
  UserHandler.userRegister(request, response);
});
