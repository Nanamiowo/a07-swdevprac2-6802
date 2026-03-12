import venueData from "@/data/venueData"

export default async function Page(
  { params }: { params: Promise<{ vid: string }> }
) {

  const { vid } = await params

  const venue = venueData[vid]

  return (
    <main className="text-center p-10">

      <img
        src={venue.image}
        className="w-[500px] mx-auto rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">
        {venue.name}
      </h1>

    </main>
  )
}