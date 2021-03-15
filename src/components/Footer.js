import styled from "styled-components";
import pic from "../asset/image/footer.jpeg";

const Container = styled.div`
	width: 100%;
	padding-top: 3rem;
	padding-bottom: 3rem;
	background: url(${pic}) rgba(218, 185, 142, 0.9);
	background-blend-mode: hue;
	background-size: cover;
	background-position: center bottom;
	background-attachment: fixed;
	@media (min-width: 768px) {
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
	}
`;
const Wrapper = styled.div`
	margin: 0 7.5%;
	border-top: 1px solid var(--text);
	li {
		font-size: var(--text-s);
		margin-top: 1rem;
		max-width: 75ch;
	}
`;

const Footer = () => {
	return (
		<Container>
			<Wrapper>
				<ul>
					<li>
						{
							"جهت هرگونه سفارش و یا پیشنهاد همکاری از راه های ارتباطی بالا استفاده کنید"
						}
					</li>
					<li>
						{
							"کلیه حقوق محصولات مربوط به شرکت ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
						}
					</li>
					<li>
						{
							"شرکت باریزانی داره مجوز تولید به شماره ۱۲۳۴-۳۴۳۴-۵۶ به تاریخ ۲۰ مرداد ۱۳۹۹ با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
						}
					</li>
				</ul>
			</Wrapper>
		</Container>
	);
};

export default Footer;
