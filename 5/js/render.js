import {getPictures} from './photo.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictureContainer = document.querySelector('.pictures');
const photosWithDescriptions = getPictures();
const picturesContainerFragment = document.createDocumentFragment();

photosWithDescriptions.forEach((photo) => {
  const pictureContainerItem = pictureTemplate.cloneNode(true);

  pictureContainerItem.querySelector('.picture__img').src = photo.url;
  pictureContainerItem.querySelector('.picture__comments').textContent = photo.comments.length;
  pictureContainerItem.querySelector('.picture__likes').textContent = photo.likes;

  picturesContainerFragment.append(pictureContainerItem);
});

pictureContainer.append(picturesContainerFragment);
