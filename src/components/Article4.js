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

	li,
	.pre-ul {
		margin-top: 0.5rem;
	}
`;

const Article1 = ({ name }) => {
	return (
		<Container name={name}>
			<div className="detail">
				{/* <Title>{"با استفاده از طب سنتی و مواد طبیعی"}</Title> */}
				<SubTitle>{"شمع های موم طبیعی"}</SubTitle>
				<Desc>
					{
						"بسیاری از مردم شمع موم طبیعی زنبور عسل را به شمع پارافین ترجیح می‌دهند زیرا به عنوان یک محصول کاملاً طبیعی، برای افرادی که سبک زندگی سالمی دارند جذابیت بیشتری دارد. در تولید شمع موم عسل به زنبورها صدمه‌ای وارد نمی‌شود. سیاری از افراد هم احساس می‌کنند شمع موم طبیعی زنبور عسل ، یک ارتباط معنوی محکم‌تری با قدرت و بهره‌وری طبیعت نسبت به دیگر انواع شمع برقرار می‌کند. این مزایای سلامتی شمع موم است که بیشتر کاربران را به خود جلب کرده و آن‌ها را به خرید شمع طبیعی ترغیب می‌کند و بسته به نوع شمع و میزان سلامتی شخصی که آن را می‌سوزاند، این مزایا می‌تواند قابل توجه باشد."
					}
					<br />
					<p className="pre-ul">
						{
							"شمع موم طبیعی زنبور عسل معروف است که دارای چندین فواید سلامتی مختلف است، از جمله:"
						}
					</p>
					<ul>
						<li>
							<strong>{"میزان آلودگی بسیارکم : "}</strong>
							{
								"از آنجا که شمع موم طبیعی زنبور عسل از موم طبیعی است، هنگام سوختن فراورده جانبی آلاینده و دوده سنگین تولید نمی‌کند. برخی از انواع شمع‌ها آلاینده‌های بسیار ریز و جزئی از مواد شیمیایی را که به عنوان سرطان زا شناخته می‌شوند تولید می‌کنند، اما این مسئله در شمع‌های موم طبیعی ایجاد نمی‌شود. شمع موم طبیعی زنبور عسل اغلب به ویژه برای مبتلایان به آسم یا آلرژی مفید است و در از بین بردن مواد حساسیت زای رایج مانند گرد و غبار و شوره از هوا مؤثر است. چون شمع موم کندتر از شمع پارافین می‌سوزد خرید شمع طبیعی به صرفه‌تر از شمع پارافین است چون ماندگاری آن بسیار بیشتر است."
							}
						</li>
						<li>
							<strong>{"خنثی سازی آلاینده ها : "}</strong>
							{
								"خنثی سازی آلاینده ها: شمع های شمع موم طبیعی زنبور عسل هنگام سوختن یون‌های منفی (آنیون) تولید می‌کنند و این یون‌ها به خنثی‌سازی آلاینده‌های موجود در هوا کمک می‌کنند. این به از بین بردن گرد و غبار و بوهای نامطبوع، کاهش علائم آلرژی و آسم و بهبود تنفس برای هرکسی که در نزدیکی شمع موم عسل حضور دارد کمک می‌کند. از طرف دیگر شمع‌های موم خالص تقریباً بدون دود و رایحه خاصی می‌سوزند و با انتشار یون‌های منفی در هوا، هوا را تمیز می‌کنند. این یون‌های منفی می‌توانند به مواد آلاینده متصل شده و به دفع آن‌ها و در نتیجه پاکسازی هوا کمک کنند."
							}
						</li>
						<li>
							<strong>{"تمدد اعصاب : "}</strong>
							{
								"تمدد اعصاب: عمل ساده سوزی شمع خاصیت آرام‌بخشی دارد و می‌تواند به کاهش استرس و تمرکز ذهن کمک کند. رایحه مطبوع ملایم عسل طبیعی شمع موم طبیعی زنبور عسل می‌تواند به آرامش شما کمک کند بدون این‌که بوی شمع‌های معطر مصنوعی به طرز غیرطبیعی فضا را پرکند."
							}
						</li>
						<li>
							<strong>{"سلامت و امنیت : "}</strong>
							{
								"سلامت و امنیت: از آنجا که شمع موم طبیعی زنبور عسل به طور کل طبیعی است و هیچ محصول جانبی تولید نمی‌کند، در صورت استفاده صحیح بدون اشک شمع سوخته و در نتیجه سوختن آن ایمن‌تر است. با این کار از خطر سوختگی و سایر صدمات ناشی از سوختن نامناسب انواع دیگر شمع جلوگیری می‌شود. روشنایی: شمع‌های موم عسل ، درخشان‌ترین و خالص‌ترین نور را در بین دیگر شمع‌ها دارند و نزدیک‌ترین نور به نور طبیعی خورشید هستند. اگر قرار است از شمع‌ها به عنوان منبع نوری استفاده شود، این می‌تواند به کاهش خستگی چشم و کاهش سردرد کمک کند."
							}
						</li>
					</ul>
				</Desc>
			</div>
		</Container>
	);
};

export default Article1;
