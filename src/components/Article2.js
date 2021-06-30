import styled from "styled-components";
import article from "../asset/image/footer.jpeg";
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
		flex-direction: row-reverse;
		.image-wrapper {
			margin-left: auto;
			flex-shrink: 0;
			width: 400px;
			height: 300px;
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
	font-size: var(--text-xl);
	margin-bottom: 0.25rem;
`;
const Desc = styled.p`
	color: var(--text-grey);
	font-size: var(--text-m);
	margin-bottom: 2rem;
	max-width: 85ch;
`;

const Article1 = ({ goToContactUs }) => {
	return (
		<Container>
			<div className="detail">
				{/* <Title>{"با استفاده از طب سنتی و مواد طبیعی"}</Title> */}
				<SubTitle>{"تاییدیه قانونی محصول"}</SubTitle>
				<Desc>
					<p>
						{
							"اولین شمع کاملا بی خطر و موثر در دنیا تایید شده در مرکز تحقیقات طب سنتی دانشکده داروسازی دانشگاه تهران ثبت شده در اداره ثبت اسناد مالکیت معنوی به شماره 102251 مورخ 13/06/1399."
						}
					</p>
				</Desc>
				<SubTitle>{"هدف ثبت اختراع"}</SubTitle>
				<Desc>
					<p>{"هدف از تولید این محصول حفظ و ارتقاع سلامتی."}</p>
					<p>{"ایجاد حس آرامش عمیق در زمان استفاده."}</p>
					<p>
						{
							"اشتغال زائی، کار آفرینی، تولید داخلی و جلوگیری از خروج ارز و همینطور ارز آوری در اینده برای ثبت این اختراع بود."
						}
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

export default Article1;
