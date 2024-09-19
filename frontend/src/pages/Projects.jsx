import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="projects">
      <h2>Projects</h2>
      <p>여기에서 제 프로젝트를 확인할 수 있습니다.</p>
    </section>
  );
});

export default Projects;