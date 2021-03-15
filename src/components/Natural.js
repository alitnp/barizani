import styled from "styled-components";
import pic from "../asset/image/natural.jpg";
import { ReactComponent as Leaf } from "../asset/svg/natural.svg";

const Container = styled.div`
	position: relative;
	width: 85%;
	height: 400px;
	margin: 0 auto;
	background-color: #ffca7a;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.5);
	margin-bottom: 3rem;
	margin-top: 3rem;
	@media (min-width: 990px) {
		height: 350px;
	}
`;
const Image = styled.div`
	display: none;

	@media (min-width: 990px) {
		display: flex;
		width: 100%;
		height: 100%;

		.image-wrapper {
			height: 100%;
			width: 50%;
			margin-right: auto;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
`;
const Detail = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 3;
	padding: 1rem 2rem;
	@media (min-width: 990px) {
		width: 60%;
	}
`;
const Title = styled.div`
	& * {
		display: inline;
	}
	svg {
		height: 52px;
		transform: translateY(0.5rem);
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
				<div className="image-wrapper">
					<div className="gradient" />
					<img src={pic} alt="شمع داخل کوزه" />
				</div>
			</Image>
		</Container>
	);
};

export default Natural;
