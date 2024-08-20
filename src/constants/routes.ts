import type { TKey } from 'types/index'

export const ROUTES = {
  // Misc
  home: '/',
  about: '/about',
  contact: '/contact',
} as const

export const HREF = {
  feitCode: {
    home: 'https://app.feit-code.com',
    signIn: 'https://app.feit-code.com/sign-in',
    signUp: 'https://app.feit-code.com/sign-up',
  },

  feit: 'https://feit.ukim.edu.mk',
  iknow: 'https://www.iknow.ukim.mk',
  eKursevi: 'https://e-kursevi.feit.ukim.edu.mk',

  github: 'https://github.com/dsijakovski98',
  linkedin: 'https://www.linkedin.com/in/daniel-shijakovski-ba78001ba',
  instagram: 'https://www.instagram.com/shijakovski',
  x: 'https://www.x.com/PlivajKlimee',
  facebook: 'https://www.facebook.com/daniel.sijakovski',

  tdl: 'https://testdevlab.com',
  tdlSchool: 'https://tdlschool.com',

  tdlCourses: {
    js: 'https://tdlschool.com/courses/beyond-the-basics-of-javascript-intermediate',
    cs: 'https://tdlschool.com/courses/fundamentals-of-computer-science-data-structures-and-algorithms-junior',
  },
}

export type NavRoute = {
  href: string
  key: TKey
  subLinks?: Array<NavRoute & { descriptionKey: TKey; icon?: string }>
  external?: boolean
}
export const NAV_ROUTES: NavRoute[] = [
  { href: ROUTES.about, key: 'ABOUT' },
  { href: ROUTES.contact, key: 'CONTACT' },
  {
    href: '',
    key: 'RESOURCES.LABEL',
    subLinks: [
      {
        href: HREF.feit,
        key: 'RESOURCES.LINKS.FEIT.TITLE',
        descriptionKey: 'RESOURCES.LINKS.FEIT.DESCRIPTION',
        icon: 'feit',
        external: true,
      },
      {
        href: HREF.iknow,
        key: 'RESOURCES.LINKS.I_KNOW.TITLE',
        descriptionKey: 'RESOURCES.LINKS.I_KNOW.DESCRIPTION',
        icon: 'iKnow',
        external: true,
      },
      {
        href: HREF.eKursevi,
        key: 'RESOURCES.LINKS.E_KURSEVI.TITLE',
        descriptionKey: 'RESOURCES.LINKS.E_KURSEVI.DESCRIPTION',
        icon: 'eKursevi',
        external: true,
      },
    ],
  },
] as const
