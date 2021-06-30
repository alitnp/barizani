import styled from "styled-components";
import pic from "../asset/image/natural.jpg";
import { ReactComponent as Leaf } from "../asset/svg/natural.svg";

const Container = styled.div`
	position: relative;
	width: 85%;
	margin: 0 auto;
	background-color: #ffca7a;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.2);
	margin-bottom: 3rem;
	margin-top: 3rem;
	padding: 3rem 0;
	display: flex;
	align-items: center;
	@media (min-width: 990px) {
		padding: 2rem 0;
	}
`;
const Image = styled.div`
	display: none;
	@media (min-width: 990px) {
		display: block;
		width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
`;
const Detail = styled.div`
	width: 100%;
	height: 100%;
	z-index: 3;
	padding: 0 2rem;
	@media (min-width: 990px) {
		width: 100%;
	}
`;
const Title = styled.div`
	display: flex;
	align-items: center;
	svg {
		height: 52px;
		margin-left: 0.5rem;
	}
	h2 {
		font-size: 1.4rem;
		color: var(--green);
	}
`;
const Desc = styled.div`
	font-size: var(--text-s);
	ul {
		margin-top: 1rem;
		color: var(--text);
		margin-right: 2rem;
	}
`;

const Natural = ({ name }) => {
	return (
		<Container name={name}>
			<Detail>
				<Title>
					{/* <Leaf /> */}
					<h2>{"مکانیسم عملکرد شمع"}</h2>
				</Title>
				<Desc>
					{
						"تجمع جرم به دلیل تخلیه نشدن در گوش موجب مشکلات شنوایی و مسائل جانبی میگردد. این محصول با ایجاد خلاء و دود حاصل از سوختن بره موم با خواص ضد باکتریایی و ضد قارچی بالقوه خود مکش ایجاد کرده، باعث جابجایی جرم و به مرور تخلیه آنها میگردد. این محصول به دلیل استفاده از مواد 100% طبیعی (کتان، پنبه، موم زنبور عسل و گیاهان دارویی موثر) هیچ گونه ضرر و آسیبی نخواهد داشت."
					}
				</Desc>
				<Title style={{ marginTop: "1rem" }}>
					<h2>{"مواد تشکیل دهنده"}</h2>
				</Title>
				<Desc>
					{
						"این محصول از مواد صد در صد طبیعی و عصاره گیاهان داروئی ساخته شده که به دلیل طبیعی بودن تاثیر خاص داشته و فاقد هرگونه ضرر و زیان میباشد."
					}
				</Desc>
			</Detail>
			<Image>
				<img src={pic} alt="شمع داخل کوزه" />
			</Image>
		</Container>
	);
};

export default Natural;
