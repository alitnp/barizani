import { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../asset/svg/logo.svg";
import header1 from "../asset/image/header1.jpeg";
import header2 from "../asset/image/header2.jpeg";

const Container = styled.div`
	position: relative;
	overflow: hidden;
	height: 700px;
	background: ${(p) => p.color};
	@media (min-width: 768px) {
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
	}
	@media (min-width: 1200px) {
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
const Gradient = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(${(p) => p.color} 0%, ${(p) => p.color}00 30%);
	z-index: 3;
	@media (min-width: 1200px) {
		background: linear-gradient(
			-90deg,
			${(p) => p.color} 0%,
			${(p) => p.color}00 30%
		);
	}
`;
const ImageWrapper = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
	z-index: 1;
	.wrap {
		width: 100%;
		margin-top: auto;
		position: relative;
		@media (min-width: 768px) {
			height: 60%;
		}
		@media (min-width: 990px) {
			height: 50%;
		}
		@media (min-width: 1200px) {
			width: 50%;
			height: 100%;
			margin-top: unset;
			margin-right: auto;
		}
	}
	img {
		width: 100%;
		object-fit: contain;
		@media (min-width: 768px) {
			height: 100%;
			object-fit: cover;
			object-position: center center;
		}
	}
`;
const Detail = styled.div`
	position: absolute;
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
		height: 50%;
	}
	@media (min-width: 1200px) {
		height: 100%;
		width: 50%;
		align-items: flex-start;
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
		color: "#fbd6a5",
		title: "شمع های طبی",
		subTitle: "از بین برنده چرک گوش",
		desc:
			"متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
	},
	{
		pic: header2,
		color: "#EABB85",
		title: "شمع های طبی",
		subTitle: "کمک به سیستم تنفسی",
		desc:
			"متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
	},
];

const Header = () => {
	const [slide, setSlide] = useState(1);

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
		<Container color={headerData[slide].color}>
			<LogoWrapper>
				<img src={logo} alt="لوگو باریزانی" />
				<span>{"باریزانی"}</span>
			</LogoWrapper>
			<ImageWrapper>
				<div className="wrap ">
					<Gradient color={headerData[slide].color} />
					<img src={headerData[slide].pic} alt="عکس از شمع طبی" />
				</div>
			</ImageWrapper>
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
		</Container>
	);
};

export default Header;
