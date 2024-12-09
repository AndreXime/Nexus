import { Response, Request } from "express";
import { generateToken } from "../middlewares/JWT.js";
import { registerUser, loginUser, findUser } from "../services/Contador.js";

/*
  Os controllers deve-se usar try catch pois quando por exemplo 
  no service nao encontra o user faz se um throw Error
*/

const register = async (req: Request, res: Response) => {
  try {
    const userId = await registerUser(req.body);
    const token = generateToken(userId);

    res.cookie("token", token, {
      httpOnly: true, // Impede o acesso ao cookie via JavaScript
      secure: process.env.NODE_ENV === "production", // Só envia o cookie via HTTPS em produção
      sameSite: "strict",
      expires: new Date(Date.now() + 3600000)
    });

    res.status(200).json({ message: "Logado com sucesso" });
  } catch {
    res.status(401).json({ message: "Email já utilizado" });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const userId = await loginUser(req.body);
    const token = generateToken(userId);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      expires: new Date(Date.now() + 3600000)
    });

    res.status(200).json({ message: "Logado com sucesso" });
  } catch {
    res.status(401).json({ message: "Email invalido ou senha" });
  }
};

const find = async (req: Request, res: Response) => {
  try {
    const user = await findUser(req.userId!);
    res.status(200).json({ message: user });
  } catch {
    res.status(400).json({ message: "Usuario não encontrado" });
  }
};

const logout = async (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict"
  });

  res.status(200).json({ message: "Logout efetuado com sucesso" });
};

export default { register, login, logout, find };
