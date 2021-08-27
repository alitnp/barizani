import { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../asset/svg/logo.svg";
import logoText from "../asset/svg/logo-with-text.svg";
import header1 from "../asset/image/header1.jpeg";
import header2 from "../asset/image/header2.jpeg";

const Container = styled.div`
	position: relative;
	padding-top: 80px;
	background: var(--yellow-bg);
	display: flex;
	flex-direction: column;
	overflow: hidden;
	@media (min-width: 990px) {
		padding-top: 0;
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		flex-direction: row;
		align-items: center;
		height: 500px;
	}
`;
const LogoWrapper = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 52px;
	z-index: 5;
	top: 0;
	right: 0;
	padding: 2rem 7.5%;
	width: 100%;
	img {
		height: 52px;
	}
	span {
		margin-right: 1rem;
		font-size: var(--text-l);
		font-weight: 500;
	}
	& * {
		display: block;
	}
	& div {
		display: flex;
		align-items: center;
	}
	.nav {
		display: none;
	}
	.nav p:hover {
		cursor: pointer;
		text-decoration: underline;
		color: var(--green);
	}
	@media (min-width: 768px) {
		.nav {
			display: flex;
		}
		.nav p {
			margin: 0 1rem;
			font-weight: 500;
			color: var(--text);
		}
		.nav p:last-child {
			margin-left: 0;
		}
		.nav .bullet {
			width: 0.5rem;
			height: 0.5rem;
			background-color: var(--green);
			opacity: 0.7;
			border-radius: 1rem;
		}
	}
`;

const ImageWrapper = styled.div`
	width: 100%;
	height: 300px;
	min-height: 350px;
	padding: 0;
	padding-bottom: 0;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center center;
		/* filter: drop-shadow(0 0 25px rgba(0, 0, 0, 0.2)); */
		/* transform: ${(p) =>
			p.slide === 1 ? "scale(1.2) translateY(-30px)" : "translateY(-30px)"}; */
	}
	@media (min-width: 990px) {
		height: 100%;
		width: 60%;
		padding: 0;
		img {
			/* transform: ${(p) => (p.slide === 1 ? "scale(1)" : "")}; */
		}
	}
`;
const Detail = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 200px;
	z-index: 6;
	h1 {
		font-size: var(--text-l);
		font-weight: 400;
	}
	h3 {
		font-size: var(--header-xs);
		white-space: nowrap;
	}
	p {
		font-size: var(--text-m);
		text-align: center;
		max-width: 70ch;
		margin: 1rem;
		margin-bottom: 0;
		margin-top: 0.25rem;
	}
	@media (min-width: 990px) {
		justify-content: center;
		padding-left: 1rem;
		padding-right: 7.5%;
		height: 100%;
		width: 40%;
		align-items: flex-start;
		flex-shrink: 0;
		padding: none;
		p {
			margin: 0;
			margin-top: 0.25rem;
			text-align: right;
		}
	}
`;

const Bullets = styled.div`
	height: 1.7rem;
	padding: 0 1rem;
	border-radius: 30px;
	background-color: #81818125;
	margin-top: 1rem;
`;
const Dot = styled.div`
	transition: transform, background-color 0.5s ease-out;
	display: inline-block;
	background-color: ${(p) => (p.selected ? "var(--green)" : "var(--grey)")};
	width: 0.7rem;
	height: 0.7rem;
	border-radius: 30px;
	margin: 0.5rem;
	transform: ${(p) => (p.selected ? "scale(1.3)" : "scale(1)")};
	cursor: pointer;
	&:hover {
		background-color: #89b89f;
	}
`;

const headerData = [
	{
		pic: header1,
		title: "شمع های طبی",
		subTitle: "شمع پاکسازی مجاری گوش",
		desc: `شمع پاکسازی مجاری گوش که از پارچه کتان، موم طبیعی و عصاره گیاهان تهیه شده.
		اولین شمع کاملا بی خطر و موثر در دنیا تایید شده در مرکز تحقیقات طب سنتی دانشکده داروسازی دانشگاه تهران.
		`,
	},
	{
		pic: header2,
		title: "شمع های طبی",
		subTitle: "کمک به سیستم تنفسی",
		desc: `شمعهای ساخته از موم طبیعی
		در دو شکل سفالی و شیشه ای ارائه میگردد.
		مفید برای سیستم تنفسی، پاکسازی محیط، تنظیم کننده چاکراها
		با سوزاندن آن احساس آرامش میکنیم.`,
	},
	{
		pic: logoText,
		title: "باریزان",
		subTitle: "شمع های طبی",
		desc: `شمعهای ساخته از موم طبیعی
		در دو شکل سفالی و شیشه ای ارائه میگردد.
		مفید برای سیستم تنفسی، پاکسازی محیط، تنظیم کننده چاکراها
		با سوزاندن آن احساس آرامش میکنیم.`,
	},
];

const Header = ({ goToContactUs, goToHistory, goToVideo }) => {
	const [slide, setSlide] = useState(2);

	useEffect(() => {
		const imageList = [header1, header2, logoText];
		imageList.forEach((image) => {
			new Image().src = image;
		});
	}, []);

	useEffect(() => {
		const slideHandler = () => {
			if (slide === headerData.length - 1) {
				setSlide(0);
				return;
			}
			setSlide(slide + 1);
		};
		const slider = setInterval(slideHandler, 7000);
		return () => {
			clearInterval(slider);
		};
	}, [slide]);

	return (
		<Container>
			<LogoWrapper>
				<div className="logo">
					<img src={logo} alt="لوگو باریزان" />
					<span>{"باریزان"}</span>
				</div>
				<div className="nav">
					<p onClick={goToHistory}>{"تاریخچه"}</p>
					<div className="bullet"></div>
					<p onClick={goToVideo}>{"طریقه مصرف"}</p>
					<div className="bullet"></div>
					<p onClick={goToContactUs}>{"ارتباط با ما"}</p>
				</div>
			</LogoWrapper>
			<Detail>
				<h1>{headerData[slide].title}</h1>
				<h3> {headerData[slide].subTitle}</h3>
				<p>{headerData[slide].desc}</p>
				<Bullets>
					{headerData.map((item, idx) => {
						return (
							<Dot
								key={idx}
								onClick={() => setSlide(idx)}
								selected={slide === idx}
							/>
						);
					})}
				</Bullets>
			</Detail>
			<ImageWrapper slide={slide}>
				{slide !== 2 && (
					<img src={headerData[slide].pic} alt="عکس از شمع طبی" />
				)}
				{slide === 2 && (
					<img
						src={headerData[slide].pic}
						alt="عکس از شمع طبی"
						style={{ marginTop: "32px" }}
					/>
				)}
			</ImageWrapper>
		</Container>
	);
};

export default Header;
