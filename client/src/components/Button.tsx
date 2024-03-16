interface ButtonProps {
  variant: 'primary' | 'secondary' | 'success' | 'destructive'
  disabled?: boolean
  onClick?: () => void
  children: string
}

const Button = ({ variant, disabled = false, onClick, children }: ButtonProps) => {
  const checkButtonVariance = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary'
      case 'secondary':
        return 'bg-secondary'
      case 'destructive':
        return 'bg-destructive'
    }
  }

  return (
    <button disabled={disabled} className={`${checkButtonVariance()} px-3 py-1.5 text-white rounded font-medium w-fit`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
