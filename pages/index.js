import { getResourceCollectionFromContext } from "next-drupal"

export default function IndexPage({ articles }) {
  return (
    <div>
      {articles?.length ? (
        articles.map((node) => (
          <div key={node.id}>
            <h1>{node.title}</h1>
          </div>
        ))
      ) : null}
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      articles: await getResourceCollectionFromContext("node--article", context)
      revalidate: 60,
    },
  }
}
