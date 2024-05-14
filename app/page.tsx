
import style from './page.module.css';

export default function Home() {
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold mt-4">
          Hello!
        </h1>
        <h2 className={style.h2tag}>
          OK
        </h2>
      </div>
    </section>
  );
}
