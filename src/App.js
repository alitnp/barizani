import AboutUs from "./components/AboutUs";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Article3 from "./components/Article3";
import Article4 from "./components/Article4";
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
import GreenBanner from "./components/GreenBanner";

function App() {
	const goToContactUs = () => {
		scroller.scrollTo("contact-us", {
			duration: 300,
			delay: 0,
			smooth: "easeOutQuart",
		});
	};
	const goToFDA = () => {
		scroller.scrollTo("FDA", {
			duration: 250,
			delay: 0,
			smooth: "easeOutQuart",
		});
	};
	const goToHistory = () => {
		scroller.scrollTo("history", {
			duration: 250,
			delay: 0,
			smooth: "easeOutQuart",
		});
	};
	const goToVideo = () => {
		scroller.scrollTo("video", {
			duration: 250,
			delay: 0,
			smooth: "easeOutQuart",
		});
	};
	const goToNatural = () => {
		scroller.scrollTo("natural", {
			duration: 250,
			delay: 0,
			smooth: "easeOutQuart",
		});
	};

	return (
		<PageLayout>
			<Header
				goToContactUs={goToContactUs}
				goToHistory={goToHistory}
				goToVideo={goToVideo}
			/>
			<Features
				goToContactUs={goToContactUs}
				goToFDA={goToFDA}
				goToNatural={goToNatural}
			/>
			<Article1 name="article" />
			<Article2 />
			<History name="history" />
			<GreenBanner goToContactUs={goToContactUs} />
			<Video name="video" />
			<Natural />
			{/* <CoOp name="coop" goToContactUs={goToContactUs} /> */}
			<Article4 name="natural" />
			<Article3 />
			{/* <AboutUs /> */}
			<Legal name="FDA" />
			<ContactUs name="contact-us" />
			<Footer />
		</PageLayout>
	);
}

export default App;
