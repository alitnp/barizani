import styled from "styled-components";
import ReactPlayer from "react-player";
import video from "../asset/video/video.mp4";

const Container = styled.div`
	width: 100%;
	margin-bottom: 5rem;

	.video-wrapper {
		max-width: 640px;
		margin: 0 auto;
		background-color: black;
	}
`;
const Title = styled.h2`
	margin: 0 7.5%;
	margin-top: 8rem;
	margin-bottom: 1rem;
	font-size: var(--header-s);
	text-align: center;
`;

const Video = () => {
	return (
		<div name="video">
			<Title>{"طریقه استفاده"}</Title>
			<Container>
				<div className="video-wrapper">
					<ReactPlayer url={video} controls={true} width="100%" />
				</div>
			</Container>
		</div>
	);
};

export default Video;
