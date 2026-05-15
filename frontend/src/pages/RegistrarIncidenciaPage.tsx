export default function RegistrarIncidenciaPage() {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-6">
        Registrar Incidencia
      </h1>

      <form className="bg-white p-6 rounded-xl shadow flex flex-col gap-4 max-w-2xl">

        <input
          type="text"
          placeholder="Título"
          className="border p-3 rounded"
        />

        <textarea
          placeholder="Descripción"
          className="border p-3 rounded h-40"
        />

        <select className="border p-3 rounded">
          <option>Baches</option>
          <option>Basura</option>
          <option>Alumbrado</option>
          <option>Emergencia</option>
        </select>

        <input
          type="file"
          className="border p-3 rounded"
        />

        <button
          className="bg-blue-900 text-white p-3 rounded"
        >
          Registrar
        </button>

      </form>

    </div>
  )
}