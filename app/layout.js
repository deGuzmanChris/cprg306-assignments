import "./globals.css";

export const metadata = {
  title: "cprg306-Assignments",
  description: "assignments for cprg306",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
