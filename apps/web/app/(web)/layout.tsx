
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <SiteHeader/>
      {/* <main> tag lagane se layout structure aur clean ho jata hai */}
      <main className="min-h-screen">
        {children}
      </main>
      <SiteFooter/>
    </>
  )
}
