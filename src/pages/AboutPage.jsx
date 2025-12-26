import { About, Footer, PageLayout, PageHeader, ContentSection } from '../components'

export default function AboutPage() {
  return (
    <PageLayout>
      <ContentSection className="pt-8">
        <PageHeader 
          title="About DJ DynaMeets"
          description="Discover the journey, passion, and artistry behind the music. From underground beginnings to electrifying performances worldwide."
        />
      </ContentSection>
      <About />
      <Footer />
    </PageLayout>
  )
}

