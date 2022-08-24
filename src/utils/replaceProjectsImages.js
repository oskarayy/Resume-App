// controls if the right image is chosen for a project object

import { projectsImages } from '../store/data/projectsImages';
import dummyImage from '../images/projects/project.jpg';

const dummyImageData = {
  src: dummyImage,
  alt: 'dummy project cover photo'
};

export const replaceProjectsImages = (projects) => {
  projects.forEach((item) => {
    if (!item.image) {
      const activeItemImage = projectsImages.find(
        (image) => image.id === item.id
      );
      return (item.image = activeItemImage ?? dummyImageData);
    }
  });
};
