import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { Counter } from "components/Counter/Counter"

import { LP_GRID_ITEMS } from "lp-items"

export const metadata: Metadata = {
  title: "Lailo v1 - Sistema de Leilões",
  description: "Plataforma moderna para leilões de imóveis e veículos",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://github.com/Enzofaleirodf/lailo-v1",
    title: "Lailo v1 - Sistema de Leilões",
    description: "Sistema de leilões de imóveis e veículos com Next.js 15 e Design System completo",
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Lailo v1 🏡🚗
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Sistema moderno e completo para leilões de imóveis e veículos. 
              Desenvolvido com Next.js 15, TypeScript e um design system robusto para máxima performance e experiência do usuário.
            </p>
            <Button href="https://github.com/Enzofaleirodf/lailo-v1" className="mr-3">
              Ver no GitHub
            </Button>
            <Button
              href="#"
              intent="secondary"
            >
              Demo (Em breve)
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex size-10 items-center justify-center rounded-full p-1.5 text-blue-700 lg:size-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
              Demo - Gerenciamento de Estado
            </h2>
            <Counter />
          </div>
        </div>
      </section>
    </>
  )
}
