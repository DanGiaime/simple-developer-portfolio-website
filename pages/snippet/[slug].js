import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown/react-markdown.min';
import MarkdownHighlight from '../../components/MarkdownHighlight'
import { getAllSnippets, getPageContentBySlug } from '../../lib/markdown'
import ContainerBlock from '../../components/ContainerBlock'

const Snippet = ({ page, darkMode }) => {
  const router = new useRouter()
  return router.isFallback ? (
    <div>Loading...</div>
  ) : (
    <ContainerBlock
    title="Roxkstar74 - super cool guy"
  >
    <div className="container">
      <h1>{page.title}</h1>
      <div className='mt-3'>
        <div className={darkMode ? 'text-white' : 'text-dark'}>
          <ReactMarkdown
            source={page.content}
            renderers={{
              code: ({ language, value }) => {
                /* Automatically takes in the language & value from the markdown file when: ```<html/css/js>
                  Content here
                  ``` in the markdown file*/
                return (
                  <MarkdownHighlight
                    language={language}
                    value={value}
                    darkMode={darkMode}
                  />
                )
              },
            }}
          />
        </div>
      </div>
    </div>
    </ContainerBlock>
  )
}

export default Snippet

export async function getStaticProps({ params }) {
  const { slug } = params
  const page = getPageContentBySlug(slug, [
    'title',
    'image',
    'slug',
    'content',
    'date',
  ])
  console.log(page);
  return {
    props: {
      page: {
        ...page,
        markdown: page.content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllSnippets(['slug'])
  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }))
  return {
    paths,
    fallback: false, // False for production, true for testing on local
  }
}
