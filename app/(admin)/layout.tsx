import VisualEditing from "@/components/VisualEditing";
import "@/styles/globals.css";
import { draftMode } from "next/headers";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      {draftMode().isEnabled && <VisualEditing />}
    </html>
  );
}