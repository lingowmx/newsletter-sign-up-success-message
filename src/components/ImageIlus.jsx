import mobileIllustration from "../../assets/images/illustration-sign-up-mobile.svg"
import desktopIllustration from "../../assets/images/illustration-sign-up-desktop.svg"


export const ImageIllus = () => {
  return (
    <div className="w-auto">
      <picture className="">
        <source srcSet={mobileIllustration} media="(max-width: 639px)"/>
        <source srcSet={desktopIllustration} media="(min-width: 640px)"/>
        <img src={mobileIllustration} alt="main-image" className=""/>
      </picture>
    </div>
  )
}
