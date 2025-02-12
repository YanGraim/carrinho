export function Cart() {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>
            <section className="flex items-center justify-between border-b-2 border-gray-300 px-4">
                <img className="w-28" src="https://imgs.search.brave.com/y656VHqgkflw7lfr0_1psnmpO9AIMpCyic-oAqKjWEo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9iZmFz/c2V0LmNvc3Rjby1z/dGF0aWMuY29tL1U0/NDdJSDM1L2FzL25q/M25oNG04YnJ0NnQ3/cjJodHRoY3R3LzEw/MDcxMzIxMi04NDdf/XzE_YXV0bz13ZWJw/JmZvcm1hdD1qcGcm/d2lkdGg9MzUwJmhl/aWdodD0zNTAmZml0/PWJvdW5kcyZjYW52/YXM9MzUwLDM1MA.jpeg" alt="imagem do produto" />

                <strong className="text-zinc-700/90">
                    R$ 5000,00
                </strong>
                <div className="flex items-center justify-center gap-3">
                    <button className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2">
                        -
                    </button>
                    1
                    <button className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2">
                        +
                    </button>
                </div>
                <strong className="float-right text-zinc-700/90">
                    SubTotal: R$ 5000,00
                </strong>
            </section>
            <p className="font-bold mt-4 px-4">Total: R$ 5000,00</p>
        </div>
    )
}