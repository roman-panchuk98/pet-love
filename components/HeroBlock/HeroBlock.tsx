import Image from "next/image";
import css from "./HeroBlock.module.css";

const HeroBlock = () => {
  return (
    <section className={css.heroSection}>
      <div className={css.container}>
        <div className={css.heroBox}>
          <h1 className={css.heroTitle}>
            Take good <span>care</span> of your small pets
          </h1>
          <p className={css.heroText}>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
        <div className={css.imageWrapper}>
          <Image
            src="/images/hero-image.jpg"
            alt="Woman and dog"
            fill
            style={{ objectFit: "cover", borderRadius: "30px" }}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
