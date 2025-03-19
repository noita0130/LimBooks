// components/PageTransition.jsx
import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * PageTransition - 페이지 전환 애니메이션을 위한 재사용 가능한 컴포넌트
 * 
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 감싸질 자식 컴포넌트
 * @param {String} props.key - 애니메이션을 위한 고유 키 (보통 경로)
 * @param {Object} props.variants - 사용자 정의 애니메이션 변형
 * @param {String} props.className - 추가 스타일 클래스
 * @param {Function} props.onAnimationComplete - 애니메이션 완료 후 콜백
 */
const PageTransition = ({ 
  children, 
  key, 
  variants, 
  className = "", 
  onAnimationComplete 
}) => {
  // 기본 애니메이션 변형 - 속도 개선
  const defaultVariants = {
    initial: { opacity: 0, y: 15 },    // 시작 위치 줄임
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 }       // 종료 위치 줄임
  };

  // 사용자 정의 변형 또는 기본값 사용
  const animationVariants = variants || defaultVariants;

  return (
    <motion.div
      key={key}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animationVariants}
      transition={{ duration: 0.2 }}   // 애니메이션 속도 단축
      className={className}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
  key: PropTypes.string,
  variants: PropTypes.object,
  className: PropTypes.string,
  onAnimationComplete: PropTypes.func
};

export default PageTransition;