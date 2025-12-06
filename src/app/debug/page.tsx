import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function DebugPage() {
  const { data: services } = await supabase
    .from("services")
    .select("id, name, slug");
  const { data: courses } = await supabase
    .from("courses")
    .select("id, title, slug");

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 mt-20">
      <h1 className="text-3xl font-bold text-red-600">
        Página de Diagnóstico de Base de Datos
      </h1>

      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-red-200">
        <h2 className="text-xl font-bold mb-4">Estado de Servicios</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">Nombre</th>
              <th className="p-2">Slug (Debe tener valor)</th>
              <th className="p-2">Estado Link</th>
            </tr>
          </thead>
          <tbody>
            {(services || []).map((s) => (
              <tr key={s.id} className="border-b dark:border-zinc-700">
                <td className="p-2">{s.name}</td>
                <td
                  className={`p-2 font-mono ${
                    !s.slug ? "text-red-500 font-bold" : "text-green-500"
                  }`}>
                  {s.slug || "NULL (FALTA EJECUTAR SQL)"}
                </td>
                <td className="p-2">
                  {s.slug ? (
                    <a
                      href={`/servicios/${s.slug}`}
                      className="text-blue-500 underline"
                      target="_blank">
                      Probar Link
                    </a>
                  ) : (
                    <span className="text-gray-400">Sin link</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-red-200">
        <h2 className="text-xl font-bold mb-4">Estado de Cursos</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">Título</th>
              <th className="p-2">Slug (Debe tener valor)</th>
              <th className="p-2">Estado Link</th>
            </tr>
          </thead>
          <tbody>
            {(courses || []).map((c) => (
              <tr key={c.id} className="border-b dark:border-zinc-700">
                <td className="p-2">{c.title}</td>
                <td
                  className={`p-2 font-mono ${
                    !c.slug ? "text-red-500 font-bold" : "text-green-500"
                  }`}>
                  {c.slug || "NULL"}
                </td>
                <td className="p-2">
                  {c.slug ? (
                    <a
                      href={`/cursos/${c.slug}`}
                      className="text-blue-500 underline"
                      target="_blank">
                      Probar Link
                    </a>
                  ) : (
                    <span className="text-gray-400">Sin link</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
