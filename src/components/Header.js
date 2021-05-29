import { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../asset/svg/logo.svg";
import header1 from "../asset/image/object1.png";
import header2 from "../asset/image/object2.png";

const Container = styled.div`
	position: relative;
	height: 700px;
	background: #fbd6a5;
	display: flex;
	flex-direction: column;
	@media (min-width: 990px) {
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
	height: 52px;
	z-index: 5;
	top: 1rem;
	right: 7.5%;
	img {
		height: 52px;
	}
	span {
		margin-right: 1rem;
		font-size: var(--text-l);
		font-weight: 500;
	}
`;

const ImageWrapper = styled.div`
	width: 100%;
	height: 40%;
	padding: 0 7.5%;
	padding-bottom: 20px;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center center;
		filter: drop-shadow(0 0 25px rgba(0, 0, 0, 0.2));
		transform: ${(p) =>
			p.slide === 1 ? "scale(1.2) translateY(-30px)" : "translateY(-30px)"};
	}
	@media (min-width: 990px) {
		height: 100%;
		width: 50%;
		padding: 100px 50px;
		img {
			transform: ${(p) => (p.slide === 1 ? "scale(1)" : "")};
		}
	}
`;
const Detail = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	top: 0;
	right: 0;
	width: 100%;
	padding: 0 7.5%;
	height: 60%;
	z-index: 6;
	h1 {
		font-size: var(--text-l);
		font-weight: 400;
	}
	h3 {
		font-size: var(--header-xs);
	}
	p {
		font-size: var(--text-s);
		text-align: center;
		max-width: 70ch;
		margin-top: 1rem;
	}
	@media (min-width: 990px) {
		height: 100%;
		width: 50%;
		align-items: flex-start;
		flex-shrink: 0;
		padding: none;
		p {
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
`;

const headerData = [
	{
		pic: header1,
		title: "شمع های طبی",
		subTitle: "از بین برنده چرک گوش",
		desc:
			"متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
	},
	{
		pic: header2,
		title: "شمع های طبی",
		subTitle: "کمک به سیستم تنفسی",
		desc:
			"متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
	},
];

const Header = () => {
	const [slide, setSlide] = useState(0);

	useEffect(() => {
		const imageList = [header1, header2];
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
				<img src={logo} alt="لوگو باریزان" />
				<span>{"باریزان"}</span>
			</LogoWrapper>
			<Detail>
				<h1>{headerData[slide].title}</h1>
				<h3>{headerData[slide].subTitle}</h3>
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
				<img src={headerData[slide].pic} alt="عکس از شمع طبی" />
			</ImageWrapper>
		</Container>
	);
};

export default Header;
