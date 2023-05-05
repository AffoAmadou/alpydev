import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        async function fetchImageData(imageId) {
          const response = await fetch(`https://alpydev.amadouh.fr/wp-json/wp/v2/media/${imageId}`);
          const data = await response.json();
          return data.source_url;
        }

        async function updateImageUrls(projects) {
          let loadedImages = 0;
          const totalImages = projects.length * 5;

          const promises = projects.map(async (project) => {
            project.content_image = await fetchImageData(project.acf.content_image);
            const contentImage = new Image();
            contentImage.src = project.content_image;
            contentImage.onload = function() {
              loadedImages++;
              setPercentage(Math.round((loadedImages / totalImages) * 100));
            };

            project.content_image_second = await fetchImageData(project.acf.content_image_second);
            const contentImageSecond = new Image();
            contentImageSecond.src = project.content_image_second;
            contentImageSecond.onload = function() {
              loadedImages++;
              setPercentage(Math.round((loadedImages / totalImages) * 100));
            };

            project.first_mockup = await fetchImageData(project.acf.first_mockup);
            const firstMockup = new Image();
            firstMockup.src = project.first_mockup;
            firstMockup.onload = function() {
              loadedImages++;
              setPercentage(Math.round((loadedImages / totalImages) * 100));
            };

            project.hero_image = await fetchImageData(project.acf.hero_image);
            const heroImage = new Image();
            heroImage.src = project.hero_image;
            heroImage.onload = function() {
              loadedImages++;
              setPercentage(Math.round((loadedImages / totalImages) * 100));
            };

            project.second__mockup = await fetchImageData(project.acf.second__mockup);
            const secondMockup = new Image();
            secondMockup.src = project.second__mockup;
            secondMockup.onload = function() {
              loadedImages++;
              setPercentage(Math.round((loadedImages / totalImages) * 100));
            };
          });

          await Promise.all(promises);

          return projects;
        }

        const response = await fetch('https://alpydev.amadouh.fr/wp-json/wp/v2/projects');
        const data = await response.json();
        const updatedProjects = await updateImageUrls(data);

        console.log(updatedProjects);
        setProjects(updatedProjects);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className='preloader' >
      {isLoading ? (
        <div>Loadincg {percentage}%</div>
      ) : (
        <div>Loaded!</div>
      )}
    </div>
  );
};

export default Preloader;
