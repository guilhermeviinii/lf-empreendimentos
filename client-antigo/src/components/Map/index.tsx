import styles from "./styles.module.scss";

export function Map() {
  return (
    <div className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1868.1600624172468!2d-49.32132168078583!3d-20.534078810420905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bcfc53dc2d9829%3A0x1300220238c49116!2sAv.%20Adolfo%20Rodrigues%2C%201013%2C%20Nova%20Granada%20-%20SP%2C%2015440-000!5e0!3m2!1spt-BR!2sbr!4v1618449100962!5m2!1spt-BR!2sbr"
        width="100%"
        height="350"
        loading="lazy"
      ></iframe>
    </div>
  );
}
