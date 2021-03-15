import AboutUs from "./components/AboutUs";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import CoOp from "./components/CoOp";
import Features from "./components/Features";
import Header from "./components/Header";
import History from "./components/History";
import Legal from "./components/Legal";
import Natural from "./components/Natural";
import PageLayout from "./components/PageLayout";
import Video from "./components/Video";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { scroller } from "react-scroll";

function App() {
	const goToContactUs = () => {
		scroller.scrollTo("contact-us", {
			duration: 300,
			delay: 0,
			smooth: "easeInOutQuart",
		});
	};
	const goToFDA = () => {
		scroller.scrollTo("FDA", {
			duration: 300,
			delay: 0,
			smooth: "easeInOutQuart",
		});
	};
	const goToNatural = () => {
		scroller.scrollTo("natural", {
			duration: 300,
			delay: 0,
			smooth: "easeInOutQuart",
		});
	};
	const goToCoOp = () => {
		scroller.scrollTo("coop", {
			duration: 300,
			delay: 0,
			smooth: "easeInOutQuart",
		});
	};

	return (
		<PageLayout>
			<Header />
			<Features
				goToFDA={goToFDA}
				goToNatural={goToNatural}
				goToCoOp={goToCoOp}
			/>
			<Article1 goToContactUs={goToContactUs} />
			<Article2 goToContactUs={goToContactUs} />
			<CoOp name="coop" goToContactUs={goToContactUs} />
			<History />
			<Natural name="natural" />
			<Video />
			<Legal name="FDA" />
			<AboutUs />
			<ContactUs name="contact-us" />
			<Footer />
		</PageLayout>
	);
}

export default App;
