import styled from "styled-components";
import pic from "../asset/image/ad.jpeg";
import Button from "./Button";

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 650px;
	background-color: #eabb85;
`;
const Image = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	.image-wrapper {
		position: relative;
		width: 100%;
		height: 65%;
		margin-top: auto;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center bottom;
		}
		.gradient {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 2;
			background: linear-gradient(#eabb85 0%, #eabb8500 40%);
		}
	}
`;
const Detail = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 3;
	padding: 3rem 7.5%;
	text-align: center;
`;
const Title = styled.h1`
	font-weight: 400;
	font-size: var(--text-l);
`;
const SubTitle = styled.h2`
	font-size: var(--text-xl);
	margin-bottom: 1rem;
`;
const Desc = styled.p`
	font-size: var(--text-s);
	max-width: 70ch;
	margin: 0 auto;
	margin-bottom: 1rem;
`;

const CoOp = ({ name, goToContactUs }) => {
	return (
		<Container name={name}>
			<Image>
				<div className="image-wrapper">
					<div className="gradient" />
					<img src={pic} alt="محصولات" />
				</div>
			</Image>
			<Detail>
				<Title>{"متن ساختگی مراکز خریدار"}</Title>
				<SubTitle>{"آماده همکاری"}</SubTitle>
				<Desc>
					{
						"متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
					}
				</Desc>
				<Button text="آغاز همکاری" onClick={goToContactUs} />
			</Detail>
		</Container>
	);
};

export default CoOp;
