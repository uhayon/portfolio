import React from 'react';
import PropTypes from 'prop-types';

import styles from './SkillCategory.module.scss';

const SkillCategory = ({ selectedLanguage, categoryName, category }) => {
  return (
    <div className={styles.skillCategory}>
      <div className={styles.skillCategoryHeader}>
        <h3>{category.title[selectedLanguage]}</h3>
        <img height='100px' src={require(`../../../../assets/icon-${categoryName}.svg`)} alt={categoryName} />
      </div>
      <div style={{padding: '1em'}}>{category.skills.join(', ')}</div>
    </div>
  )
};

SkillCategory.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired
}

export default SkillCategory;