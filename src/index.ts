import express from "express";
import { PermissionHandle } from "./middlewares/PermissionHandle";

import { usuarioRoutes } from "./routes/usuarios.routes";

const app = express();

app.use(express.json());

app.use(PermissionHandle, usuarioRoutes);
// add custom error handler middleware as the last middleware

app.listen(3333, () => console.log("Server is running"));
