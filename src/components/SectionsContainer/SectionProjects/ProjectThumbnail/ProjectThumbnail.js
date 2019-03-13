import React, { Suspense } from 'react';

import Spinner from '../../../Spinner/Spinner';
import IconGithub from '../../../Icons/IconGithub';
import IconWebsite from '../../../Icons/IconWebsite';

import styles from './ProjectThumbnail.module.scss';

const Link = ({ link, Icon, text }) => (
  link ?
  <a href={link} target='__blank'>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Icon />
      <span>{text}</span>
    </div>
  </a> :
  null
);

const ProjectThumbnail = ({ selectedLanguage, project }) => {
  return (
    <div className={styles.projectThumbnail}>
      <div>
        <h3>{project.Name}</h3>
        <Suspense fallback={<Spinner />}>
          <img width='100%' src={`https://res.cloudinary.com/hoqyhndta/image/upload/v1552345743/porfolio/projects_screenshots/${project.ScreenshotName}`} alt={project.Name} />
        </Suspense>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{project.Description[selectedLanguage]}</p>
        </div>
        <p style={{padding: '0 1em'}}><strong>{selectedLanguage === 'EN' ? 'Technologies used:' : 'Tecnologías utilizadas:'}</strong>{` ${project.Technologies.join(', ')}`}</p>
      </div>
      <div className={styles.links}>
        <Link link={project.GithubRepoUrl} text={selectedLanguage === 'EN' ? 'Frontend Repository' : 'Repositorio Front-end'} Icon={IconGithub} />
        <Link link={project.GithubBackendUrl} text={selectedLanguage === 'EN' ? 'Backend Repository' : 'Repositorio Back-end'} Icon={IconGithub} />
        <Link link={project.LiveSiteUrl} text={selectedLanguage === 'EN' ? 'Live site' : 'Sitio web'} Icon={IconWebsite} />
      </div>
    </div>
  )
};

export default ProjectThumbnail;