import Card from "@/components/card"
import SocialLinks from "@/components/social-links"

export default function Footer() {
  return (
    <footer>
      <Card>
        <div className="flex justify-between">
          <SocialLinks />
        </div>
      </Card>
    </footer>
  )
}
