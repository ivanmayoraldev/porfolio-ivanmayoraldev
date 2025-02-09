import Card from "@/components/web/card"
import SocialLinks from "@/components/web/social-links"
import { ThemeSwitcher } from "@/components/web/theme-switcher"

export default function Footer() {
  return (
    <footer>
      <Card>
        <div className="flex justify-between">
          <SocialLinks />
          <ThemeSwitcher />
        </div>
      </Card>
    </footer>
  )
}
