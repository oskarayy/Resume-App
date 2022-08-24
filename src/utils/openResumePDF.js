// Fits correct url to active site language

export const openResumePDF = (lang) => {
  let cvLink;

  switch (lang) {
    case 'pl':
      cvLink =
        'https://drive.google.com/file/d/1DSKFpAWaZlPyeG9GTIFJbVjqwE-Jz0Vb/view?usp=sharing';
      break;
    case 'en':
      cvLink = 'https://resume.io/r/wZMwkn3V7';
      break;
    case 'de':
      cvLink =
        'https://drive.google.com/file/d/1uqXM6dxXqvjjKf9bV-_QgMa0TfMJ5m6z/view?usp=sharing';
      break;
    default:
      console.log('RESUME BUTTON: Choosing active PDF link error');
  }

  window.open(cvLink);
};
