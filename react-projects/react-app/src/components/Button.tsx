

interface Props {
children: ReactNode;
color?:'secondary' | 'primary' | 'danger';
onClick: () => void;
}
const Button = ({children,onClick, color="secondary"}:Props) => {

return (
<button Type="button" className={"btn btn-" + color} onClick={onClick}>{children}</button>
)
}
export default Button;


