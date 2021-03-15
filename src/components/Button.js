import styled from "styled-components";

const Container = styled.button`
	width: 170px;
	height: 40px;
	border-radius: 50px;
	box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.24);
	background: var(--green);
	transition: background 0.3s ease-out;
	border: none;
	outline: none;
	user-select: none;
	font-weight: bold;
	color: var(--white);
	font-size: var(--text-s);
	cursor: pointer;
	:hover {
		background: var(--text);
	}
`;

const Button = ({ text, onClick }) => {
	return <Container onClick={onClick}>{text}</Container>;
};

export default Button;
