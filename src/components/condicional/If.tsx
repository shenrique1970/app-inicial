interface IfProps {
    teste: boolean
    childrem: any
}

export default function If(props: IfProps) {
    if (props.teste) {
        return props.childrem
    } else {
        return null
    }
    
}