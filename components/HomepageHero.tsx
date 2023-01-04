import Link from "next/link";

const PLOW_REGISTRY_HREF = "https://registry.field33.com"

export default () => (
    <div className="flex flex-col md:flex-row max-w-[60rem] mx-auto px-6 py-10">
      <div className="w-3/5">
        <div className="text-8xl font-black">Plow</div>
        <div className="text-lg max-w-[30rem] pt-2">A package manager for ontologies empowering<br/> anyone to build reliable solutions with ontologies.</div>
      </div>
      <div className="flex flex-col mt-4 md:mt-0 gap-4 justify-center font-bold text-center">
        <Link href="/introduction" className="p-2 px-12 rounded-sm bg-f33-green-500">GET STARTED</Link>
        <Link href={PLOW_REGISTRY_HREF} className="p-2 px-12 rounded-sm bg-f33-orange-500">DISCOVER PACKAGES</Link>
      </div>
    </div>
);
