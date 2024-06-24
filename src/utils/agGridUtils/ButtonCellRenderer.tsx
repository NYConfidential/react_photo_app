import { Button } from "react-bootstrap"

export interface IButtonCellRenderer {
    onButtonClick: () => void
    text: string
    variant: string
}

const ButtonCellRenderer = ({ text, onButtonClick, variant }: IButtonCellRenderer) => {
    return (
        <Button className="custom-button m-1" onClick={() => onButtonClick()} size="sm" variant={variant}>
            {text}
        </Button>
    )
}

export default ButtonCellRenderer
