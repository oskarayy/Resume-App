import classes from './SocialsIcon.module.css';

const SocialsIcon = ({ item, onModal }) => {
  const { id, url, icon, alt } = item;

  const openInNewTab = (url) => {
    window.open(url).focus();
  };

  if (id === 'zoom' || id === 'whatsapp') {
    return (
      <div className={classes.icon} onClick={onModal.bind(null, id)}>
        <img src={icon} alt={alt} />
      </div>
    );
  }

  return (
    <div className={classes.icon} onClick={openInNewTab.bind(null, url)}>
      <img src={icon} alt={alt} />
    </div>
  );
};

export default SocialsIcon;
