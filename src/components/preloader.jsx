import React, { useState, useEffect, useContext } from 'react';
import GSAP from 'gsap';
import { ProjectContext } from '../context/contex';
const Preloader = () => {
    const [percentage, setPercentage] = useState(0);
    // const [isLoading, setIsLoading] = useState(true);
    const { setProjects, setIsLoading, isLoading } = useContext(ProjectContext);
    useEffect(() => {
        console.log(setIsLoading, isLoading)

        const animate = (percent, dur = 0) => {
            const tl = GSAP.timeline();
            tl.to('.preloader__container', {
                width: percent + '%',
                ease: 'ease.inOut',

            });

            if (percent === 100) {
                tl.to('.preloader', {
                    width: 0,
                    ease: 'ease.inOut',
                    duration: 1.5,
                    delay: 0.5,
                    onComplete: () => {
                        document.querySelector('.preloader').style.display = 'none';
                        showPage();
                    }
                });
            }
        }

        const showPage = () => {
            setIsLoading(!isLoading);
        }

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
                        contentImage.onload = function () {
                            loadedImages++;
                            setPercentage(Math.round((loadedImages / totalImages) * 100));
                            console.log(loadedImages, Math.round((loadedImages / totalImages) * 100));
                            animate(Math.round((loadedImages / totalImages) * 100));
                        };

                        project.content_image_second = await fetchImageData(project.acf.content_image_second);
                        const contentImageSecond = new Image();
                        contentImageSecond.src = project.content_image_second;
                        contentImageSecond.onload = function () {
                            loadedImages++;
                            setPercentage(Math.round((loadedImages / totalImages) * 100));
                            animate(Math.round((loadedImages / totalImages) * 100));


                        };

                        project.first_mockup = await fetchImageData(project.acf.first_mockup);
                        const firstMockup = new Image();
                        firstMockup.src = project.first_mockup;
                        firstMockup.onload = function () {
                            loadedImages++;
                            setPercentage(Math.round((loadedImages / totalImages) * 100));
                            animate(Math.round((loadedImages / totalImages) * 100));

                        };

                        project.hero_image = await fetchImageData(project.acf.hero_image);
                        const heroImage = new Image();
                        heroImage.src = project.hero_image;
                        heroImage.onload = function () {
                            loadedImages++;
                            setPercentage(Math.round((loadedImages / totalImages) * 100));

                            animate(Math.round((loadedImages / totalImages) * 100));

                        };

                        project.second__mockup = await fetchImageData(project.acf.second__mockup);
                        const secondMockup = new Image();
                        secondMockup.src = project.second__mockup;
                        secondMockup.onload = function () {
                            loadedImages++;
                            setPercentage(Math.round((loadedImages / totalImages) * 100));

                            animate(Math.round((loadedImages / totalImages) * 100), 3);

                        };
                    });

                    await Promise.all(promises);

                    return projects;
                }



                const response = await fetch('https://alpydev.amadouh.fr/wp-json/wp/v2/projects');
                const data = await response.json();
                const updatedProjects = await updateImageUrls(data);

                setProjects(updatedProjects);

                console.log(isLoading)
            } catch (error) {
                console.log(error);
            }
        };

        fetchProjects();
    }, []);

    return (

        <div className='preloader' >
            {/* {isLoading && ( */}
            <div className="preloader__wrapper">
                <div className='preloader__container'> </div>

                <p className="preloader__counter">
                    {percentage}
                </p>
            </div>


            {/* )} */}
        </div>
    );
};

export default Preloader;
