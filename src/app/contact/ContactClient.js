
import Hero from "./components/Hero";
import ContactCard from "./components/ContactCard";
import Form from "./components/Form";
import Map from "./components/Map";
import CTA from "./components/CTA";

export default function ContactClient() {

  return (
    <main className="bg-white overflow-hidden">
      {/* Background Grid */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#0A4F8A 1px, transparent 1px),
            linear-gradient(90deg, #0A4F8A 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero */}
     <Hero></Hero>

      {/* Contact Cards */}
   <ContactCard></ContactCard>

      {/* Form + Map */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
          
<Form></Form>
            {/* Google Map */}
          <Map></Map>
          </div>
        </div>
      </section>

      {/* CTA */}
    <CTA></CTA>
    </main>
  );
}