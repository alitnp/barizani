import styled from "styled-components";
import { ReactComponent as Check } from "../asset/svg/check.svg";
import { ReactComponent as Leaf } from "../asset/svg/leaf.svg";
import { ReactComponent as Chart } from "../asset/svg/chart.svg";

const Container = styled.div`
	width: 100%;
	padding: 0 7.5%;
	padding-top: 6rem;
	padding-bottom: 6rem;
	background: var(--grey);
	@media (min-width: 1600px) {
		display: flex;
		align-items: center;
	}
`;
const Header = styled.div`
	width: 100%;
	text-align: center;
	font-size: var(--text-s);
	white-space: nowrap;
	h4 {
		font-size: var(--header-s);
	}
	@media (min-width: 1600px) {
		width: fit-content;
	}
`;
const CardsWrapper = styled.div`
	width: 100%;
	@media (min-width: 1200px) {
		display: flex;
		justify-content: space-between;
	}
`;
const Card = styled.div`
	display: flex;
	width: fit-content;
	margin: 0 auto;
	margin-top: 2rem;
	:hover .icon-wrapper {
		svg path {
			fill: var(--white);
		}
	}
	:hover .icon-wrapper .motion {
		transform: scale(0);
	}
	.icon-wrapper {
		position: relative;
		flex-shrink: 0;
		width: 90px;
		height: 90px;
		border-radius: 50px;
		background-color: var(--green);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 1rem;
		.motion {
			position: absolute;
			transition: transform 0.3s ease-out;
			transform: scale(1.01);
			top: 0;
			left: 0;
			width: 90px;
			height: 90px;
			border-radius: 50px;
			background-color: var(--grey-dark);
			z-index: 1;
		}
	}
	.detail {
		p {
			color: var(--text-grey);
			width: 20ch;
			@media (min-width: 768px) {
				width: 40ch;
			}
			@media (min-width: 1200px) {
				width: 20ch;
			}
		}
		span {
			color: var(--green);
			cursor: pointer;
		}
	}
	@media (min-width: 1200px) {
		flex-direction: column;
		h2 {
			margin-top: 0.5rem;
		}
	}
`;

const Features = ({ goToFDA, goToNatural, goToCoOp }) => {
	const cardsData = [
		{
			pic: <Check style={{ zIndex: 3 }} />,
			title: "تاییدیه FDA",
			desc:
				"متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
			goto: goToFDA,
		},
		{
			pic: <Leaf style={{ zIndex: 3 }} />,
			title: "مواد طبیعی",
			desc:
				"متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
			goto: goToNatural,
		},
		{
			pic: <Chart style={{ zIndex: 3 }} />,
			title: "آماده همکاری",
			desc:
				"متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
			goto: goToCoOp,
		},
	];
	return (
		<Container>
			<Header>
				<span>{"باریزانی شامل این"}</span>
				<h4>{"ویژگی ها"}</h4>
				<span>{"است."}</span>
			</Header>
			<CardsWrapper>
				{cardsData.map((item, idx) => {
					return (
						<Card key={idx}>
							<div className="icon-wrapper">
								{cardsData[idx].pic}
								<div className="motion" />
							</div>
							<div className="detail">
								<h2>{cardsData[idx].title}</h2>
								<p>{cardsData[idx].desc}</p>
								<span onClick={cardsData[idx].goto}>{"بیشتر بخوانید"}</span>
							</div>
						</Card>
					);
				})}
			</CardsWrapper>
		</Container>
	);
};

export default Features;