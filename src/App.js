import AboutUs from "./components/AboutUs";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Article3 from "./components/Article3";
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
			smooth: "easeInOutQuart",
		});
	};
	const goToArticle = () => {
		scroller.scrollTo("article", {
			duration: 300,
			delay: 0,
			smooth: "easeInOutQuart",
		});
	};
	const goToHistory = () => {
		scroller.scrollTo("history", {
			duration: 300,
			delay: 0,
			smooth: "easeInOutQuart",
		});
	};
	const goToVideo = () => {
		scroller.scrollTo("video", {
			duration: 300,
			delay: 0,
			smooth: "easeInOutQuart",
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
				goToArticle={goToArticle}
				goToHistory={goToHistory}
				goToVideo={goToVideo}
			/>
			<Article1 name="article" />
			<Article2 />
			<GreenBanner goToContactUs={goToContactUs} />
			<Legal name="FDA" />
			<Natural />
			<History name="history" />
			{/* <CoOp name="coop" goToContactUs={goToContactUs} /> */}
			<Article3 />
			<Video name="video" />
			{/* <AboutUs /> */}
			<ContactUs name="contact-us" />
			<Footer />
		</PageLayout>
	);
}

export default App;
