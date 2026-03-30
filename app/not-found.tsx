import Image from "next/image";
import css from "./not-found.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <section>
      <div className={css.container}>
        <div className={css.notFoundMainBox}>
          <div className={css.notFoundBox}>
            <span className={css.notFoundNumber}>4</span>
            <div className={css.imageWrapper}>
              <Image
                src="/images/catNotFound.webp"
                alt="Cat"
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "1000px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                priority
              />
            </div>
            <span className={css.notFoundNumber}>4</span>
          </div>
          <div className={css.notFoundSubBox}>
            <p className={css.notFoundText}>Ooops! This page not found :(</p>
            <Link href="/" className={css.goHomeBtn}>
              To home page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
