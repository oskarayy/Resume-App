import Card from '../interface/UI/Card';
import classes from './DetailContent.module.css';

const DetailContent = (props) => {
  const { content } = props.activeCategory;

  return (
    <section className={classes.content}>
      <Card>
        {content.headers.map((header, index) => (
          <div key={`item-${index}`} className={classes.item}>
            <h3>{header}</h3>
            {content.headers.length === 1 &&
              content.texts.map((text, index) => (
                <p key={`item-${index}`}>{text}</p>
              ))}
            {content.headers.length !== 1 && <p>{content.texts[index]}</p>}
          </div>
        ))}
      </Card>
    </section>
  );
};

export default DetailContent;
