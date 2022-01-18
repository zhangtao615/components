import React from 'react';
import classNames from 'classnames'

// button大小 
export type ButtonSize = 'large' | 'small'

// button类型
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
  label?: string;
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
    label,
    ...restProps
  } = props
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled  
  })
  if (btnType === 'link' && href) {
    return (
      <a 
        className={classes}
        href={href}
        {...restProps}
      >
        { children ? children : label }
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        { children ? children : label }
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}
export default Button;

