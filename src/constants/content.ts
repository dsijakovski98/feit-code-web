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
  { icon: 'x', href: HREF.x, label: 'X/Twitter' },
  { icon: 'facebook', href: HREF.facebook, label: 'Facebook' },
]

export const SUPPORTED_LANGUAGES: Array<{ label: string; href: string }> = [
  { label: 'JavaScript', href: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { label: 'C', href: 'https://www.cprogramming.com' },
  { label: 'Bash', href: 'https://www.gnu.org/software/bash' },
  { label: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { label: 'C++', href: 'https://isocpp.org' },
  { label: 'Go', href: 'https://go.dev' },
  { label: 'Python', href: 'https://www.python.org' },
  { label: 'Rust', href: 'https://www.rust-lang.org' },
  { label: 'PHP', href: 'https://www.php.net' },
] as const
