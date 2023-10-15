import PropTyes from 'prop-types'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  className?: string
}

const Button = (props: ButtonProps) => {
  const { children, onClick, className } = props

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTyes.node.isRequired,
  onClick: PropTyes.func,
  className: PropTyes.string
}

export default Button
