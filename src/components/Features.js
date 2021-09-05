import styled from "styled-components";
import Check from "../asset/svg/check.svg";
import Leaf from "../asset/svg/leaf.svg";
import Chart from "../asset/svg/chart.svg";
import history from "../asset/png/history.png";
import lamp from "../asset/png/lamp.png";

const Container = styled.div`
	width: 100%;
	padding: 3rem 1rem;
	background: var(--grey);
	user-select: none;
	@media (min-width: 768px) {
		padding: 3rem 7.5%;
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
`;
const CardsWrapper = styled.div`
	width: 100%;
	max-width: 900px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	align-items: center;
	@media (min-width: 768px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
		align-items: space-between;
	}
`;
const Card = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	align-items: center;
	margin-top: 2rem;

	:hover .icon-wrapper {
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
		margin-left: 2rem;
		margin-right: auto;
		/* cursor: pointer; */
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
		h2 {
		}
	}
	@media (min-width: 768px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
		margin-right: 0;
		h2 {
			margin-top: 0.5rem;
		}
		.icon-wrapper {
			margin: 0 auto;
		}
		.detail {
			text-align: center;
		}
	}
`;

const Features = ({ goToFDA, goToContactUs, goToNatural }) => {
	const cardsData = [
		{
			pic: (
				<img
					style={{ zIndex: 3, width: "35px", height: "35px" }}
					src={Leaf}
					alt="تاییدیه FDA"
				/>
			),
			title: "شمع های طبیعی",
			desc: "متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
			goto: goToNatural,
		},
		{
			pic: (
				<img
					style={{ zIndex: 3, width: "35px", height: "35px" }}
					src={Check}
					alt="تاییدیه FDA"
				/>
			),
			title: "تاییدیه FDA",
			desc: "متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
			goto: goToFDA,
		},
		{
			pic: (
				<img
					style={{ zIndex: 3, width: "40px", height: "40px" }}
					src={Chart}
					alt="تاریخچه"
				/>
			),
			title: "آماده همکاری",
			desc: "متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
			goto: goToContactUs,
		},
	];
	return (
		<Container>
			<Header>
				<h4>{"ویژگی ها"}</h4>
			</Header>
			<CardsWrapper>
				{cardsData.map((item, idx) => {
					return (
						<Card key={idx} className="" onClick={cardsData[idx].goto}>
							<div className="icon-wrapper">
								{cardsData[idx].pic}
								<div className="motion" />
							</div>
							<div className="detail">
								<h2>{cardsData[idx].title}</h2>
								{/* <p>{cardsData[idx].desc}</p> */}
								{/* <span>{"بیشتر بخوانید"}</span> */}
							</div>
						</Card>
					);
				})}
			</CardsWrapper>
		</Container>
	);
};

export default Features;
