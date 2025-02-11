import { BsCartPlus } from "react-icons/bs";

export function Home() {
    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-3xl mb-4 mt-10 text-center">Produtos em alta</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                    <section className="w-full">
                        <img className="w-full rounded-lg max-h-70 mb-2" src="https://imgs.search.brave.com/y656VHqgkflw7lfr0_1psnmpO9AIMpCyic-oAqKjWEo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9iZmFz/c2V0LmNvc3Rjby1z/dGF0aWMuY29tL1U0/NDdJSDM1L2FzL25q/M25oNG04YnJ0NnQ3/cjJodHRoY3R3LzEw/MDcxMzIxMi04NDdf/XzE_YXV0bz13ZWJw/JmZvcm1hdD1qcGcm/d2lkdGg9MzUwJmhl/aWdodD0zNTAmZml0/PWJvdW5kcyZjYW52/YXM9MzUwLDM1MA.jpeg" alt="imagem do produto" />
                        <p className="font-medium mt-1 mb-2">Macbook Air M2</p>
                        <div className="flex gap-3 items-center">
                            <strong className="text-zinc-700/90">
                                R$ 5000,00
                            </strong>
                            <button className="bg-zinc-900 p-1 rounded">
                                <BsCartPlus size={20} color="#fff"/>
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}