import type { ReactNode } from "react";
import "./globals.css";

import { Providers } from "./Providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
