import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ProjectContext.Provider value={{ projects, setProjects,isLoading, setIsLoading }}>
      {children}
    </ProjectContext.Provider>
  );
};
