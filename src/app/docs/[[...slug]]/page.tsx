export default async function DocPage ({params}: {params: Promise<{slug: string[]}>}) {
    const {slug} = await params;

    if (slug?.length === 2) {
        return <h1>Documentation Page for feature {slug[0]} and concept {slug[1]}</h1>
    } else if (slug?.length === 1) {
        return <h1>Documentation Page for feature: {slug[0]}</h1>
    }
    // Optional catch all segments
    return <h1>Documentation Page for Slugs</h1>
}