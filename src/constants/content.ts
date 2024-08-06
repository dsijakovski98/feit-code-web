import { HREF } from '@constants/routes'
import elena from '@images/testimonials/elena.png'

// TODO: Update with relative images
export const TESTIMONIAL_IMAGES: Array<{ slot: string; img: ImageMetadata }> = [
  {
    slot: 'elena',
    img: elena,
  },
]

export const SOCIALS: Array<{ icon: string; href: string; label: string }> = [
  { icon: 'github', href: HREF.github, label: 'Github' },
  { icon: 'linkedin', href: HREF.linkedin, label: 'LinkedIn' },
  { icon: 'instagram', href: HREF.instagram, label: 'Instagram' },
  { icon: 'x', href: HREF.x, label: 'X/Twitter' },
  { icon: 'facebook', href: HREF.facebook, label: 'Facebook' },
]
