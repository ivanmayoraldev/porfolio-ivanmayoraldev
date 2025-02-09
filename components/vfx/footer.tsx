import Card from "@/components/vfx/card"
import SocialLinks from "@/components/vfx/social-links"
import { ThemeSwitcher } from "@/components/vfx/theme-switcher"

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
