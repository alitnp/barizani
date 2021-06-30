import styled from "styled-components";
import article from "../asset/image/article1.jpeg";
import Button from "./Button";
import { ReactComponent as Logo } from "../asset/svg/logo.svg";
import { ReactComponent as LogoText } from "../asset/svg/logo-text.svg";

const Container = styled.article`
	padding: 3rem 7.5%;
	margin-top: 2rem;
	.detail {
	}
	.image-wrapper {
		position: relative;
		width: 100%;
		height: 250px;
		background-color: none;
		overflow: hidden;
		border-radius: 1rem;
		box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.2);
		margin-top: 2rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: bottom;
		}
		.logo-wrapper {
			position: absolute;
			top: 1rem;
			left: 1rem;
			width: 50px;
			z-index: 5;
			filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
		}
	}
	@media (min-width: 500px) {
		.image-wrapper {
			height: 300px;
			img {
				object-position: center bottom;
			}
		}
	}
	@media (min-width: 768px) {
		.image-wrapper {
			height: 300px;
			img {
				object-position: bottom;
			}
		}
	}
	@media (min-width: 990px) {
		display: flex;
		.image-wrapper {
			margin-right: auto;
			flex-shrink: 0;
			width: 400px;
			height: 400px;

			margin-top: 3rem;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: bottom;
			}
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

const Article1 = ({ goToContactUs, name }) => {
	return (
		<Container>
			<div className="detail" name={name}>
				{/* <Title>{"توضیح اختراع"}</Title> */}
				<SubTitle>{"توضیح اختراع"}</SubTitle>
				<Desc>
					{
						"در بازار های جهانی محصولی با نام شمع پاکسازی گوش که از طب سنتی سرخپوستان برداشت شده بود، وجود داشت که در آمریکا با آن آشنا شدند. این محصول در مراکز طب سنتی شرقی و همینطور اسپاها مورد توجه و استفاده مراجعین قرار داشت. سه کارخانه لوازم آرایشی و بهداشتی آن را تولید و به بازارها عرضه میکردند."
					}
					<br />
					{
						"بر آن شدم تا امتیاز ساخت آنرا خریداری کرده و برای تولید داخلی به ایران بیاورم. پس از انجام این کار و خریداری دستور ساخت دیری نپایید که FDA صلاحیت آنرا به دلیل عدم مکش کافی جهت تخلیه جرم گوش و همینطور آسیب دیدن پرده گوش به دلیل احتمال چکیدن موم مذاب رد کرده و بطور رسمی ساخت آن در آمریکا را ممنوع اعلام کرد. ما که به طور آزمایشی از آن استفاد کرده و حس رضایت مندی زیادی را به دست آورده بودیم، برآن شدیم که نواقصش را برطرف نموده و با دریافت تاییده از مراکز ذیصلاح محصولی کاملا بی خطر با کارایی مطمئن به بازار عرضه نماییم که خوشبختانه با تحقیق و محاسبات پس از 2 سال موفق به ساخت آن شده و برای اولین بار در دنیا با عنوان یک اختراع کامل شده از مرکز تحقیقات دارویی طب سنتی در دانشکده داروسازی دانشگاه تهران تاییده دریافت نماییم."
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
