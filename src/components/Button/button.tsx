import React from 'react';
import classNames from 'classnames'

// button大小 
export enum ButtonSize {
  Large = 'large',
  Small = 'small'
}
//button类型
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
// 定义类型别名， 通过React.ButtonHTMLAttributes<HTMLElement>/React.AnchorHTMLAttributes<HTMLElement>获取button/a下所有的属性并使用交叉类型合并所有属性
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type NativeLinkProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// 导出两种属性 --- Partial将所有属性搜定义为可选
export type ButtonProps = Partial<NativeButtonProps & NativeLinkProps>

const Button: React.FC<ButtonProps> = (props) => {
  const { 
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled  
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a 
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}
export default Button;

