
import "./globals.css";
import Dashboard from "./pages/(dashboard)/dashboard/page";

export default function RootLayout({
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: "#F5F5F5" }}
        className="lg:w-[100%] sm:w-[500px] "  >
        <Dashboard />
      </body>
    </html>
  );
}
