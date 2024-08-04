import { t } from 'i18n:astro'
import i18next from 'i18next'
import { type ComponentProps, Fragment } from 'react'
import { Trans as ReactTrans } from 'react-i18next'

type Props = { tKey: Parameters<typeof t>[0] } & Pick<ComponentProps<typeof ReactTrans>, 'values' | 'components'>

const Trans = ({ tKey, ...rest }: Props) => {
  return <ReactTrans i18n={i18next} defaults={t(tKey[0] as any)} {...rest} parent={Fragment} />
}

export default Trans
