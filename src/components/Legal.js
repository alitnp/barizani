import styled from "styled-components";
import check from "../asset/svg/check-line.svg";
import fda from "../asset/png/fda.png";

const Container = styled.div`
	padding: 1rem 7.5%;
	margin-bottom: 6rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and (min-width: 768px) {
		flex-direction: row;
	}
`;
const Title = styled.div`
	display: flex;
	align-items: center;
	svg {
		height: 52px;
		transform: translateY(0.5rem);
	}
	h2 {
		color: var(--green);
		white-space: nowrap;
	}
`;
const Desc = styled.div`
	font-size: var(--text-s);
	p {
		margin-top: 1rem;
		color: var(--text);
	}
`;

const Info = styled.div`
	width: 100%;
	height: 100%;
	z-index: 1;
	@media only screen and (min-width: 768px) {
		width: 50%;
	}
`;

const Image = styled.img`
	width: 50%;
	height: 100%;
	max-height: 350px;
	object-fit: contain;
	object-position: center center;
	z-index: 0;
	@media only screen and (min-width: 768px) {
		display: block;
	}
`;

const History = ({ name }) => {
	return (
		<Container name={name}>
			<Info>
				<Title>
					<img
						src={check}
						alt="check icon"
						style={{ width: "40px", marginLeft: "1rem" }}
					/>
					<h2>{"دارای مجوز از سازمان FDA"}</h2>
				</Title>
				<Desc>
					<p>
						{
							"اولین شمع کاملا بی خطر و موثر در دنیا تایید شده در مرکز تحقیقات طب سنتی دانشکده داروسازی دانشگاه تهران ثبت شده در اداره ثبت اسناد مالکیت معنوی به شماره 102251 مورخ 13/06/1399."
						}
					</p>
				</Desc>
			</Info>
			<Image src={fda} alt="fda approved logo" style={{}} />
		</Container>
	);
};

export default History;
