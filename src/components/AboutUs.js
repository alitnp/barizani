import styled from "styled-components";

const Container = styled.div`
	width: 85%;
	padding: 2rem;
	margin: 3rem 7.5%;
	border: 1px solid var(--text-grey);
	border-radius: 10px;
	h2 {
		text-align: center;
		color: var(--green);
	}
	p {
		font-size: var(--text-s);
		text-align: center;
		max-width: 95ch;
		margin: 1rem auto;
	}
`;

const AboutUs = () => {
	return (
		<Container>
			<h2>{"درباره ما"}</h2>
			<p>{"مخترعین: فاطمه سعیدی، مهدی سبکتکین، ونوس سبکتکین"}</p>
			<p>{`تولید و فروش این محصول برای مدت 20 سال در ایران منحصرا به مخترعین تعلق دارد.
هرگونه تولید ، کپی و فروش این محصول غیر مجاز بوده و پیگرد قانونی دارد.`}</p>
		</Container>
	);
};

export default AboutUs;
