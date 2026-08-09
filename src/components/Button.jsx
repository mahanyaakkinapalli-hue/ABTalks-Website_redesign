import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  children,
  ...rest
}) {
  const classes = `${styles.btn} ${styles[variant]} ${styles[size]} ${
    fullWidth ? styles.full : ''
  } ${className}`.trim();
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} strokeWidth={2.25} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} strokeWidth={2.25} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }

  const Component = as || 'button';
  const { type, ...otherRest } = rest;
  return (
    <Component className={classes} type={as ? type : type || 'button'} {...otherRest}>
      {content}
    </Component>
  );
}
