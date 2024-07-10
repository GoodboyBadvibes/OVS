import "../globals.css";
import 'remixicon/fonts/remixicon.css'
import { jura } from "../Fonts";

export const metadata = {
  title: 'Dashboard',
  description: 'Online Vendor Store',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en" >
      
      <body className={jura.className}>
      
      {children}
      </body>
    </html>
  )
}
