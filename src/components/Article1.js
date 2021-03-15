import styled from "styled-components";
import article from "../asset/image/article1.jpeg";
import Button from "./Button";
import { ReactComponent as Logo } from "../asset/svg/logo.svg";
import { ReactComponent as LogoText } from "../asset/svg/logo-text.svg";

const Container = styled.article`
	padding: 6rem 7.5%;
	.detail {
	}
	.image-wrapper {
		position: relative;
		width: 100%;
		height: 400px;
		background-color: #040404;
		overflow: hidden;
		border-radius: 1rem;
		box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.5);
		margin-top: 2rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
		.logo-wrapper {
			position: absolute;
			top: 1rem;
			left: 1rem;
			width: 50px;
			z-index: 5;
		}
	}
	@media (min-width: 1200px) {
		display: flex;
		.image-wrapper {
			margin-right: auto;
			flex-shrink: 0;
			width: 400px;
			height: 400px;
			margin-top: unset;
		}
		.detail {
			margin-left: 2rem;
		}
	}
`;
const Title = styled.h1`
	font-weight: 400;
`;
const SubTitle = styled.h2`
	font-size: var(--text-xl);
	margin-bottom: 1rem;
`;
const Desc = styled.p`
	color: var(--text-grey);
	font-size: var(--text-s);
	margin-bottom: 2rem;
	max-width: 85ch;
`;

const Article1 = ({ goToContactUs }) => {
	return (
		<Container>
			<div className="detail">
				<Title>{"با استفاده از طب سنتی و مواد طبیعی"}</Title>
				<SubTitle>{"از بین برنده چرک و بیماری های مربوط به گوش"}</SubTitle>
				<Desc>
					{
						"متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
					}
				</Desc>
				<Button text="سفارش دهید" onClick={goToContactUs} />
			</div>
			<div className="image-wrapper">
				<div className="logo-wrapper">
					<Logo />
					<LogoText />
				</div>
				<img src={article} alt="شمع طبی" />
			</div>
		</Container>
	);
};

export default Article1;
