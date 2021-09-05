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
	padding-bottom: 0;
	display: flex;
	align-items: center;
	flex-direction: column;
	@media (min-width: 990px) {
		flex-direction: row;
		padding: 0;
	}
`;
const Image = styled.div`
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
	margin-bottom: 1rem;
	svg {
		height: 52px;
		margin-left: 0.5rem;
	}
	h2 {
		font-size: 2rem;
		/* color: var(--green); */
	}
`;
const Desc = styled.div`
	font-size: 14px;
	ul {
		margin-top: 1rem;
		margin-bottom: 0.5rem;
		color: var(--text);
		margin-right: 1rem;
	}
`;

const Natural = ({ name }) => {
	return (
		<Container name={name}>
			<Detail>
				<Title>
					{/* <Leaf /> */}
					<h2>{"موارد منع استفاده"}</h2>
				</Title>
				<Desc>
					<ul>
						<li>{"کسانی که گوش آنها جراحی شده"}</li>
						<li>{"سوراخی پرده گوش"}</li>
						<li>{"داشتن پروتز در گوش"}</li>
					</ul>
					{"هشدار :"}
					{
						"	این شمعها وسیله درمان نیست. برای مشکلات شنوائی و بیماری های گوش مراجعه به پزشک ضروریست."
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
