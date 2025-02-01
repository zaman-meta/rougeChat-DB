import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import theme from "./theme/theme";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "RougeChat DB | Home",
  description:
    "Stop struggling with complex queries—ask your question, and Rougechat DB delivers instant insights. Simplify data analysis and make smarter, data-driven decisions effortlessly.",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body>
            <Navbar />
            {children}
            <Footer />
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
