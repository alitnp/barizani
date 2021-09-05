import styled from "styled-components";
import article from "../asset/image/article1.jpeg";
import Button from "./Button";
import { ReactComponent as Logo } from "../asset/svg/logo.svg";
import { ReactComponent as LogoText } from "../asset/svg/logo-text.svg";

const Container = styled.article`
	padding: 3rem 7.5%;
	padding-bottom: 0;
	margin-bottom: 64px;
	margin-top: 32px;
	direction: ltr;
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
	@media (min-width: 1200px) {
		display: flex;
		flex-direction: row-reverse;
		.image-wrapper {
			margin-right: auto;
			flex-shrink: 0;
			width: 500px;
			height: 400px;
			margin-top: unset;
		}
		.detail {
			margin-left: 2rem;
		}
	}
	@media (min-width: 1600px) {
		.image-wrapper {
			width: 650px;
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
	color: var(--text);
	font-size: 14px;
	margin-bottom: 2rem;
	max-width: 85ch;
`;

const Article1 = ({ goToContactUs }) => {
	return (
		<Container>
			<div className="detail">
				{/* <Title>{"با استفاده از طب سنتی و مواد طبیعی"}</Title> */}
				<SubTitle>{"توضیح اختراع"}</SubTitle>
				<Desc>
					{
						"در بازار های جهانی محصولی با نام شمع پاکسازی گوش که از طب سنتی سرخپوستان برداشت شده بود، وجود داشت که در آمریکا با آن آشنا شدم. این محصول در مراکز طب سنتی شرقی و همینطور اسپاها مورد توجه و استفاده مراجعین قرار داشت. سه کارخانه لوازم آرایشی و بهداشتی آن را تولید و به بازارها عرضه میکردند."
					}
					<br />
					{
						"بر آن شدم تا امتیاز ساخت آنرا خریداری کرده و برای تولید داخلی به ایران بیاورم. پس از انجام این کار و خریداری دستور ساخت دیری نپایید که FDA صلاحیت آنرا به دلیل عدم مکش کافی جهت تخلیه جرم گوش و همینطور آسیب دیدن پرده گوش به دلیل احتمال چکیدن موم مذاب رد کرده و بطور رسمی ساخت آن در آمریکا را ممنوع اعلام کرد. ما که به طور آزمایشی از آن استفاد کرده و حس رضایت مندی زیادی را به دست آورده بودیم، برآن شدیم که نواقصش را برطرف نموده و با دریافت تاییدیه از مراکز ذیصلاح محصولی کاملا بی خطر با کارایی مطمئن به بازار عرضه نماییم که خوشبختانه با تحقیق و محاسبات پس از 2 سال موفق به ساخت آن شده و برای اولین بار در دنیا با عنوان یک اختراع کامل شده از مرکز تحقیقات دارویی طب سنتی در دانشکده داروسازی دانشگاه تهران تاییدیه دریافت نماییم."
					}
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
