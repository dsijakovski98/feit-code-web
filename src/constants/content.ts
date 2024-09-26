import { HREF } from '@constants/routes'
import elena from '@images/testimonials/elena.png'

// TODO: Update with relevant images
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
  { icon: 'facebook', href: HREF.facebook, label: 'Facebook' },
]

export const SUPPORTED_LANGUAGES = ['JavaScript', 'C', 'Bash', 'TypeScript', 'C++', 'Go', 'Python', 'Rust', 'PHP'] as const
