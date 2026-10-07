import "./globals.css";

export const metadata = {
  title: "Pixora — Enhance every Pic",
  description:
    "AI-powered photo editing tools for removing objects, enhancing images, creating backgrounds and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
