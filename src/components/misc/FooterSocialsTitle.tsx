import Trans from '@components/Trans'
import GradientText from '@components/ui/GradientText'

const FooterSocialsTitle = () => {
  return (
    <p className="sm:text-lg">
      <Trans
        tKey={['NAV.FOOTER.REACH_OUT']}
        components={{
          dude: <GradientText variant="secondary" className="font-semibold" />,
        }}
      />
    </p>
  )
}

export default FooterSocialsTitle
