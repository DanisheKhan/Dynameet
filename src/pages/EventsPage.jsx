import { Footer, PageLayout, PageHeader, ContentSection } from '../components'

export default function EventsPage() {
  return (
    <PageLayout>
      <ContentSection className="pt-8">
        <PageHeader
          title="EVENTS"
          description="Join me for unforgettable nights of music, energy, and connection. From intimate underground sessions to massive festival stages."
        />
        {/* Event listings will go here */}
      </ContentSection>
      <Footer />
    </PageLayout>
  )
}


