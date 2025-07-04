'use strict';

const collapseIcon = document.querySelector('.library-icon');
const iconExpand = document.querySelector('.expand-icon');
const leftSideLibrary = document.querySelector('.left-side-library');
const rightSideLibrary = document.querySelector('.right-side-library');

collapseIcon.addEventListener('click', () => {
  leftSideLibrary.classList.toggle('collapse');
});

collapseIcon.addEventListener('mouseover', () => {
  leftSideLibrary.classList.contains('collapse')
    ? (collapseIcon.src = 'Icon/collapse-icon.svg')(
        (collapseIcon.title = 'Open your Library')
      )
    : (collapseIcon.title = 'Collapse your Library');
});

collapseIcon.addEventListener('mouseout', () => {
  leftSideLibrary.classList.contains('collapse') &&
    (collapseIcon.src = 'Icon/equalizer-icon.svg');
});

// console.log(!leftSideLibrary.classList.contains('collapse'));
leftSideLibrary.addEventListener('mouseover', () => {
  leftSideLibrary.classList.contains('expanded') ||
    leftSideLibrary.classList.contains('collapse') ||
    (collapseIcon.hidden = false);
});

leftSideLibrary.addEventListener('mouseout', () => {
  leftSideLibrary.classList.contains('collapse') ||
    (collapseIcon.hidden = true);
});

// Expanding library
let visible = false;
iconExpand.addEventListener('click', () => {
  leftSideLibrary.classList.toggle('expanded');

  rightSideLibrary.hidden = !visible;
  visible = !visible;
});
