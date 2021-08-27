import styled from "styled-components";
import article from "../asset/image/glass.jpeg";
import Button from "./Button";
import { ReactComponent as Logo } from "../asset/svg/logo.svg";
import { ReactComponent as LogoText } from "../asset/svg/logo-text.svg";

const Container = styled.article`
	padding: 3rem 7.5%;
	padding-bottom: 0;
	.detail {
	}
	.image-wrapper {
		position: relative;
		width: 100%;
		height: 250px;
		overflow: hidden;
		border-radius: 1rem;
		flex-shrink: 0;
		box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.2);
		margin-top: 2rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		.logo-wrapper {
			position: absolute;
			top: 1rem;
			right: 1rem;
			width: 50px;
			z-index: 5;
		}
	}
	@media (min-width: 990px) {
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		.image-wrapper {
			margin-left: auto;
			flex-shrink: 0;
			width: 50%;
			height: 400px;
			margin-top: unset;
		}
		.detail {
			margin-right: 2rem;
		}
	}
`;
const Title = styled.h1`
	font-weight: 400;
`;
const SubTitle = styled.h2`
	font-size: 2rem;
	margin-bottom: 1rem;
`;
const Desc = styled.p`
	color: var(--text-grey);
	font-size: var(--text-m);
	margin-bottom: 2rem;
	max-width: 85ch;

	.names {
		display: flex;
		border-bottom: 1px solid black;
		padding-bottom: 1rem;
		& p {
			margin-left: 12px;
		}
	}
`;

const Article3 = ({ goToContactUs }) => {
	return (
		<Container>
			<div className="detail">
				{/* <Title>{"با استفاده از طب سنتی و مواد طبیعی"}</Title> */}
				<SubTitle>{"مخترعین"}</SubTitle>
				<Desc>
					<div className="names">
						<p>{"فاطمه سعیدی،"}</p>
						<p>{"مهدی سبکتکین،"}</p>
						<p>{"ونوس سبکتکین"}</p>
					</div>

					<p style={{ marginTop: "1rem" }}>
						{`تولید و فروش این محصول برای مدت 20 سال در ایران منحصرا به مخترعین تعلق دارد.
								هرگونه تولید ، کپی و فروش این محصول غیر مجاز بوده و پیگرد قانونی دارد.
								تولید و توزیع محصول فقط در صورت قرارداد رسمی با مخترعین و کسب مجوز امکان پذیر است. `}
					</p>
				</Desc>

				{/* <Button text="سفارش دهید" onClick={goToContactUs} /> */}
			</div>
			<div className="image-wrapper">
				{/* <div className="logo-wrapper">
					<Logo />
					<LogoText />
				</div> */}
				<img src={article} alt="شمع طبی" />
			</div>
		</Container>
	);
};

export default Article3;
