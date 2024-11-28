import { Router, Response, Request } from "express";
import { verifyToken, generateToken } from "./middlewares/JWT.js";
import validateInput from "./middlewares/validateInput.js";
  
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ response: "Ping" });
});

router.post("/login", validateInput("login"), async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  try {
    const token = generateToken(email);

    res.cookie("token", token, {
      httpOnly: true, // Impede o acesso ao cookie via JavaScript
      secure: process.env.NODE_ENV === "production", // Só envia o cookie via HTTPS em produção
      sameSite: "strict", 
      expires: new Date(Date.now() + 3600000), 
    }); 

    res.status(200).json({ response: "Olá voce tem um token com voce" });
  } catch {
    res.status(401).json({ response: "Sem autorização" });
  }
});

router.post("/registro", validateInput("register"), async (req: Request, res: Response) => {
  const { email, senha, nome } = req.body;
  try {
    const token = generateToken(email);
    
    res.cookie("token", token, {
      httpOnly: true, // Impede o acesso ao cookie via JavaScript
      secure: process.env.NODE_ENV === "production", // Só envia o cookie via HTTPS em produção
      sameSite: "strict", 
      expires: new Date(Date.now() + 3600000), 
    }); 

    res.status(200).json({ response: "Olá voce tem um token com voce" });
  } catch {
    res.status(401).json({ response: "Sem autorização" });
  }
});

router.get("/logout", verifyToken, async (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true, 
    secure: process.env.NODE_ENV === "production", 
    sameSite: "strict",
  });
  
  res.status(200).json({ response: "Você foi deslogado" });
});

router.get("/protegido", verifyToken, async (req: Request, res: Response) => {
  res.status(200).json({ response: `Voce está logado como id :${req.userId}` });
});

router.use(async (req: Request, res:Response) => {
  res.status(404).json({ response: "Não encontrado" });
});

export default router;
