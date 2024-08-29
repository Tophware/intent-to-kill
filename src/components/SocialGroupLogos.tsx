import authorityLogo from "../assets/icons/authority.svg";
import criminalsLogo from "../assets/icons/criminals.svg";
import governmentLogo from "../assets/icons/government.svg";
import immigrantsLogo from "../assets/icons/immigrants.svg";
import jetsetLogo from "../assets/icons/jetset.svg";
import laborLogo from "../assets/icons/labor.svg";
import medicineLogo from "../assets/icons/medicine.svg";
import outcastsLogo from "../assets/icons/outcasts.svg";
import pressLogo from "../assets/icons/press.svg";
import { SocialGroup } from "../types";

export const AuthorityLogo = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={authorityLogo} alt="Authority" {...props} />;

export const CriminalsLogo = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={criminalsLogo} alt="Criminals" {...props} />;

export const GovernmentLogo = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={governmentLogo} alt="Government" {...props} />;

export const ImmigrantsLogo = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={immigrantsLogo} alt="Immiigrants" {...props} />;

export const JetsetLogo = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={jetsetLogo} alt="Jetset" {...props} />;

export const LaborLogo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={laborLogo} alt="Labor" {...props} />
);

export const MedicineLogo = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={medicineLogo} alt="Medicine" {...props} />;

export const OutcastsLogo = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={outcastsLogo} alt="Outcasts" {...props} />;

export const PressLogo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={pressLogo} alt="Press" {...props} />
);

type LogoProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  group: SocialGroup;
};

export const Logo = (props: LogoProps) => {
  let returnLogo = null;
  switch (props.group) {
    case SocialGroup.Authority:
      returnLogo = <AuthorityLogo {...props} />;
      break;
    case SocialGroup.Criminals:
      returnLogo = <CriminalsLogo {...props} />;
      break;
    case SocialGroup.Government:
      returnLogo = <GovernmentLogo {...props} />;
      break;
    case SocialGroup.Immigrants:
      returnLogo = <ImmigrantsLogo {...props} />;
      break;
    case SocialGroup.JetSet:
      returnLogo = <JetsetLogo {...props} />;
      break;
    case SocialGroup.Labor:
      returnLogo = <LaborLogo {...props} />;
      break;
    case SocialGroup.Medicine:
      returnLogo = <MedicineLogo {...props} />;
      break;
    case SocialGroup.Outcasts:
      returnLogo = <OutcastsLogo {...props} />;
      break;
    case SocialGroup.Press:
      returnLogo = <PressLogo {...props} />;
      break;
    default:
      returnLogo = null;
  }
  return returnLogo;
};
