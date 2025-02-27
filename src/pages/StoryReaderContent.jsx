import StoryReaderPage from "../components/StoryReaderPage";
import { Routes, Route } from 'react-router-dom';

const StoryReaderContent = () => {
  return (
    <Routes>

      {/* 홈페이지 루트 경로 */}
      <Route path="/" element={<StoryReaderPage />} />
      <Route path="/:storyType" element={<StoryReaderPage />} />
      <Route path="/:storyType/:storyId" element={<StoryReaderPage />} />
      <Route path="/:storyType/:storyId/:chapterId" element={<StoryReaderPage />} />
      <Route path="/scripts" element={<StoryReaderPage />} />
      <Route path="/scripts/:personalityId" element={<StoryReaderPage />} />
      <Route path="/scripts/:personalityId/:storyId" element={<StoryReaderPage />} />
    </Routes>
  );
};

export default StoryReaderContent;