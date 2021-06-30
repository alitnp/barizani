import styled from "styled-components";
import pic from "../asset/image/footer.jpeg";

const Container = styled.div`
	width: 100%;
	padding-top: 3rem;
	padding-bottom: 3rem;
	/* background: url(${pic}) rgba(218, 185, 142, 0.9); */
	/* background-blend-mode: hue;
	background-size: cover;
	background-position: center bottom;
	background-attachment: fixed; */
	background-color: var(--yellow-bg);
	@media (min-width: 768px) {
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
	}
`;
const Wrapper = styled.div`
	margin: 0 7.5%;
	border-top: 1px solid var(--text);
	li {
		font-size: var(--text-m);
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
					<li>{"کلیه حقوق محصولات در اختیار برند باریزان می باشد."}</li>
					<li>
						{
							"برند باریزان با شماره ثبت 235725 مورخ 14/05/1398 شروع به فعالیت نموده و در سال 1399 موفق به ثبت اختراع کسب مجوز فعالیت نموده است."
						}
					</li>
				</ul>
			</Wrapper>
		</Container>
	);
};

export default Footer;
