import Banner from "@/components/Banner"
import CardPanel from "@/components/CardPanel"

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-10">
      <div className="bg-red-500 text-green-500 p-5 text-center text-3xl">
        1. การ์ดต้องวางเรียงกัน ไม่ขาดหาย 
        <br/>
        2. ดาว rating ต้องกดได้ และไม่ลิ้งไปหน้าอื่น
      </div>
      

      <Banner/>

      <h1 className="text-3xl font-bold text-center mb-10 text-orange-500">
        TCAS 69!!!
      </h1>

      <CardPanel/>

    </main>
  )
}