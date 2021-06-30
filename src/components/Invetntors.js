import styled from "styled-components";

const Container = styled.div`
	padding: 2rem 7.5%;
	margin-top: 2rem;
	margin-bottom: 2rem;
	background-color: var(--green-light);
`;
const SubTitle = styled.h2`
	font-size: var(--text-xl);
	margin-bottom: 0.5rem;
`;
const Desc = styled.p`
	color: var(--text);
	font-size: var(--text-s);
	margin-bottom: 1rem;
	max-width: 85ch;
	@media (min-width: 768px) {
		font-size: var(--text-m);
	}
`;

const Inventors = () => {
	return (
		<Container>
			<SubTitle>{"مخترعین"}</SubTitle>
			<Desc>
				{"فاطمه سعیدی، مهدی سبکتکین، ونوس سبکتکین"}
				<br />
				{
					"تولید و فروش این محصول برای مدت 20 سال در ایران منحصرا به مخترعین تعلق دارد."
				}
				<br />
				{
					"هرگونه تولید ، کپی و فروش این محصول غیر مجاز بوده و پیگرد قانونی دارد.  "
				}
				<br />
				{
					"تولید و توزیع محصول فقط در صورت قرارداد رسمی با مخترعین و کسب مجوز امکان پذیر است. "
				}
			</Desc>
		</Container>
	);
};

export default Inventors;
