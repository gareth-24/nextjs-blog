import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
// allPostsData is returned in the props object in getStaticProps()
// and is passed to the 'Home' component as a prop

export default function Home({ allPostsData }) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            Hello, I'm <strong>Gareth</strong>. I'm a former Civil Design Engineer in the process of switching to a career in tech and web development. I'm an aspiring full-stack developer and am currently working on honing my React skills in Epicodus' full-time coding bootcamp. Feel free to check out my work on 
            <a href='https://github.com/gareth-24'> github</a>!
          </p>
          <p>
            Outside of work and the classroom, I am an avid pacific northwest sports fan as well as a video game enthusiast. In my free time, you can find me traveling, barhopping, lifting weights, attending UW football and Mariners games, or kicking back and playing games with friends.
          </p>
          <p>
            This is a simple Next.js App bootstraped with Create-React-App and inspired by this {' '}
            <a href="https://nextjs.org/learn">Next.js tutorial</a>.
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      </Layout>
  );
}
