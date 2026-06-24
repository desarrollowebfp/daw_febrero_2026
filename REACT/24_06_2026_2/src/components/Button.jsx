import styled from "styled-components";

const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.colores.primario};
	color: white;
	padding: ${(props) => (props.$grande ? "16px 28px" : "10px 18px")};
	border: none;
	border-radius: ${({ theme }) => theme.radio};
	transition: background-color 0.5s;

	&:hover {
		background-color: #5a5bd4;
	}
`;

const Button = ({ children }) => {
	return <StyledButton $grande>{children}</StyledButton>;
};

export default Button;
