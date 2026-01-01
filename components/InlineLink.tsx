import Button, { ButtonProps } from '@/components/form/Button'

interface InlineLinkProps {
    label: string
    linkText: string
    href: string
    className?: string
    textSize?: 'sm' | 'md' | 'lg'
    buttonProps?: ButtonProps
}

const InlineLink = ({
    label,
    linkText,
    href,
    textSize = "sm",
    className = "",
    buttonProps
}: InlineLinkProps) => {

    const textSizes = {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
    };
    return (
        <div className={`${textSizes[textSize]} ${className}`}>
            <span className={className ? "" : "me-1"}>{label}</span>
            <Button {...buttonProps} href={href} variant="link">{linkText}</Button>
        </div>
    )
}

export default InlineLink
