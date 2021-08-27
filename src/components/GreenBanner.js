import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
	padding: 2rem 7.5%;
	margin-top: 8rem;
	margin-bottom: 4rem;
	background-color: var(--green-light);
	@media (min-width: 600px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
const SubTitle = styled.h2`
	font-size: 2rem;
	margin-bottom: 0.5rem;
`;
const Desc = styled.p`
	color: var(--text);
	font-size: var(--text-s);
	margin-bottom: 1rem;
	max-width: 85ch;
	@media (min-width: 768px) {
		font-size: var(--text-m);
	}
`;
const Info = styled.div`
	margin-left: 1rem;
	margin-bottom: 2rem;
	@media (min-width: 600px) {
		margin-bottom: unset;
	}
`;

const GreenBanner = () => {
	return (
		<Container>
			<Info>
				<SubTitle>{"آماده همکاری"}</SubTitle>
				<Desc>
					{
						"شرکت باریزان آماده هرگونه همکاری و اعطای نمایندگی به علاقه مندان می باشد."
					}
				</Desc>
			</Info>
			<Button text="ارتباط با ما" />
		</Container>
	);
};

export default GreenBanner;
