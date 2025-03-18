import StoryReaderPage from "../components/StoryReaderPage";
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/footer';

const StoryReaderContent = () => {
  return (
    <>
      <div className="content-container">
        <Routes>
          {/* 홈페이지 루트 경로 */}
          <Route path="/" element={<StoryReaderPage />} />
          <Route path="/:storyType" element={<StoryReaderPage />} />
          <Route path="/:storyType/:storyId" element={<StoryReaderPage />} />
          <Route path="/:storyType/:storyId/:chapterId" element={<StoryReaderPage />} />

          {/* 인격 관련 경로 */}
          <Route path="/personality" element={<StoryReaderPage />} />
          <Route path="/personality/:personalityId" element={<StoryReaderPage />} />
          <Route path="/personality/:personalityId/:contentType/:storyId" element={<StoryReaderPage />} />

          {/* E.G.O 관련 경로 추가 */}
          <Route path="/ego/:personalityId" element={<StoryReaderPage />} />

          {/* 아나운서 관련 경로 */}
          <Route path="/announcers" element={<StoryReaderPage />} />
          <Route path="/announcers/:announcerId" element={<StoryReaderPage />} />
        </Routes>
      </div>
    </>
  );
};

export default StoryReaderContent;