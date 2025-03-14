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

      <Route path="/personality" element={<StoryReaderPage />} />
      <Route path="/personality/:personalityId" element={<StoryReaderPage />} />
      <Route path="/personality/:personalityId/:storyId" element={<StoryReaderPage />} />
      <Route path="/personality/:personalityId/:contentType/:storyId" element={<StoryReaderPage />} />
    </Routes>
  );
};

export default StoryReaderContent;