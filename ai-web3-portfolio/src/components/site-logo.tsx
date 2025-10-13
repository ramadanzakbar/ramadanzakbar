import logo from '../assets/logo.svg';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => (
  <img
    src={logo}
    alt="Ramadanzakbar beta monogram"
    className={className}
    width={120}
    height={48}
    loading="lazy"
  />
);

export default Logo;
