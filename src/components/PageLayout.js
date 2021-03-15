import styled from "styled-components";
import tile from "../asset/image/tile.jpg";

const Container = styled.div``;

const Bg = styled.div`
	@media (min-width: 768px) {
		position: fixed;
		z-index: -1;
		width: 100%;
		height: 100vh;
		background: url(${tile});
		transform: translateY(-2rem);
	}
`;

const PageWrapper = styled.div`
	width: 100%;
	background-color: var(--white);

	@media (min-width: 768px) {
		width: 700px;
		margin: 2rem auto;
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
		border-radius: 0.5rem;
	}
	@media (min-width: 990px) {
		width: 900px;
	}
	@media (min-width: 1200px) {
		width: 1100px;
	}
	@media (min-width: 1600px) {
		width: 1500px;
	}
`;

const PageLayout = ({ children }) => {
	return (
		<Container>
			<Bg />
			<PageWrapper>{children}</PageWrapper>
		</Container>
	);
};

export default PageLayout;
