import styled from "styled-components";
import { ReactComponent as PhoneIcon } from "../asset/svg/phone.svg";
import { ReactComponent as InstaIcon } from "../asset/svg/insta.svg";
import { ReactComponent as ArrowIcon } from "../asset/svg/arrow.svg";

const Container = styled.div`
	width: 85%;
	margin: 3rem 7.5%;
	text-align: center;
	margin-bottom: 8rem;
	h2 {
		font-size: var(--header-s);
	}
	@media (min-width: 990px) {
		display: flex;
		justify-content: space-evenly;
		.h2 {
			display: none;
		}
	}
`;
const Card = styled.div`
	width: 100%;
	width: 85%;
	height: 140px;
	margin: 1rem auto;
	border: 1px solid var(--text-grey);
	border-radius: 10px;
	padding-bottom: 1rem;
	p {
		font-size: var(--text-l);
	}
	svg {
		height: 24px;
		width: 24px;
		margin-left: 1rem;
	}
	.title {
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid var(--text-grey);
		margin: 0 7.5%;
		padding: 1rem 0;
		margin-bottom: 0.75rem;
	}
	.ltr {
		display: block;
		direction: ltr;
	}
	@media (min-width: 600px) {
		width: 350px;
	}
	@media (min-width: 990px) {
		margin: unset;
		width: 250px;
	}
`;
const Arrows = styled.div`
	margin-left: 1rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	svg {
		width: 24px;
		margin-left: 1rem;
	}

	.row {
		display: flex;
		align-items: center;
		span {
			white-space: nowrap;
			font-weight: 500;
		}
		margin-bottom: 1rem;
	}
	@media (max-width: 990px) {
		display: none;
	}
`;
const Title = styled.h2`
	margin: 0 7.5%;
	margin-top: 8rem;
	margin-bottom: -2rem;
	font-size: var(--header-xs);
	text-align: center;
	display: none;
	@media (min-width: 990px) {
		display: block;
	}
`;
const ContactUs = ({ name }) => {
	return (
		<>
			<Title>{"راه های ارتباطی"}</Title>
			<Container name={name}>
				<h2 className="h2">{"ارتباط با ما"}</h2>
				<Arrows>
					<div className="row">
						<ArrowIcon />
						<span>{"شروع همکاری"}</span>
					</div>
					<div className="row">
						<ArrowIcon />
						<span>{"ثبت سفارش"}</span>
					</div>
					<div className="row">
						<ArrowIcon />
						<span>{"ارتباط با ما"}</span>
					</div>
				</Arrows>
				<Card>
					<div className="title">
						<PhoneIcon />
						<span>{"تلفن تماس"}</span>
					</div>
					<p>{"۰۲۱-۲۲۲۰۹۷۶۹"}</p>
					<p>{"۰۹۱۲-۱۷۹۷۶۸۳"}</p>
				</Card>
				<Card>
					<div className="title">
						<InstaIcon />
						<span>{"صفحه اینستاگرام"}</span>
					</div>
					<span className="ltr" style={{ fontSize: "1.2rem" }}>
						{"@Barizani_Candles"}
					</span>
				</Card>
			</Container>
		</>
	);
};

export default ContactUs;
