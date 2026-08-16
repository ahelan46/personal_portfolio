import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '@/content/projects';

export default function Projects() {
  const projects = PROJECTS;
  const loading = false;

  return (
    <div className="container section">
      <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>My Portfolio</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
        A showcase of my recent work, highlighting my skills in frontend and backend development.
      </p>
      
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};


