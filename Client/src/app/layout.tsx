import Navbar from "../components/navbar";
import Footer from "../components/footer";
import theme from "../theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export const metadata = {
  title: "NexusFinnace",
  description: "Bem-vindo ao meu site com Next.js 13+",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />

          <ThemeProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
