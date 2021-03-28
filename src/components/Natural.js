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
	box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.5);
	margin-bottom: 3rem;
	margin-top: 3rem;
	padding: 2rem 0;
	display: flex;
	align-items: center;
	@media (min-width: 990px) {
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
		color: var(--green);
	}
`;
const Desc = styled.div`
	font-size: var(--text-s);
	p {
		margin-top: 1rem;
		color: var(--text);
	}
`;

const Natural = ({ name }) => {
	return (
		<Container name={name}>
			<Detail>
				<Title>
					<Leaf />
					<h2>{"استفاده از مواد کاملا طبیعی"}</h2>
				</Title>
				<Desc>
					<p>
						{
							"متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستار گیرد."
						}
					</p>
				</Desc>
			</Detail>
			<Image>
				<img src={pic} alt="شمع داخل کوزه" />
			</Image>
		</Container>
	);
};

export default Natural;
