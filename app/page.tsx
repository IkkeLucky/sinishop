"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import BackgroundPaths from "@/components/ui/kokonutui/background-paths"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function ShoppingAppLanding() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="relative">
        <BackgroundPaths title="SiniShop" />

        {/* Explanatory Section */}
        <section className="relative z-10 py-32 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-100">
              Que les ofrecemos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Productos Internacionales",
                  description:
                    "Les ofrecemos productos de calidad desde todas partes del mundo, directamente hasta la puerta de tu casa.",
                  image: "/images/international.jpg?height=200&width=200",
                },
                {
                  title: "Precios Competitivos",
                  description:
                    "Importadores directos de los productos que buscas, tanto en stock como a pedido, a los mejores precios.",
                  image: "/images/sale.jpg?height=200&width=200",
                },
                {
                  title: "Compras Simples",
                  description:
                    "Envios internacionales directos a la puerta de tu casa, cualquier tipo de envio a coordinar.",
                  image: "/images/easyshop.jpg?height=200&width=200",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white/80 dark:bg-neutral-800/80 rounded-lg shadow-md backdrop-blur-sm"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="mb-4 rounded-full w-60 h-60"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-100">{item.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="relative py-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white dark:bg-neutral-950 px-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Como funciona
            </span>
          </div>
        </div>

        {/* Horizontal Cards Section */}
        <section className="relative z-10 py-8 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="space-y-6">
              {[
                {
                  title: "Productos en stock",
                  description:
                    "Si tenemos ciertos productos en stock, se van a encontrar dentro de la pagina, marcado con el estado stock y disponible para adquirir en el momento, con una demora de un par de dias hasta una o maximo dos semanas.",
                  image: "/images/instock.jpg",
                },
                {
                  title: "Productos a pedido, o pendiente a aprobacion",
                  description:
                    "Si quieres un producto a pedido puedes rellenar las casillas debajo, estos productos estaran pendiente a aprobacion y cuando sean aprobados podras ver en la pagina el estado del producto, al inicio aparecera con el estado pendiente de aprobacion en amarillo, y luego al ser aprobado se vera como aprobado con color verde. Generalmente productos a aprobar llegan con un poco mas de demora.",
                  image: "/images/underreview.jpg",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-neutral-100">{item.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">{item.description}</p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Divider */}
        <div className="relative py-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white dark:bg-neutral-950 px-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Diferentes metodos de pago
            </span>
          </div>
        </div>

        {/* Horizontal Cards Section */}
        <section className="relative z-10 py-8 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="space-y-6">
              {[
                {
                  title: "Pago en pesos, productos en stock",
                  description:
                    "Al inicio de SiniShop los pagos de productos en stock se pueden realizar en pesos, los pendientes de aprobacion que sean luego aprobados pueden tambien ser en pesos al llegar el pedido dentro de las semanas siguientes",
                  image: "/images/pesos.jpg",
                },
                {
                  title: "Pago en dolares, para acelerar la aprobacion de producto",
                  description:
                    "Dentro del estado del producto se podra pagar en dolares, de esta forma permitiendo al producto en espera, pasar a ser aprobado en el mismo dia o dos dias laborales.",
                  image: "/images/dolares.jpg",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-neutral-100">{item.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">{item.description}</p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Request Form */}
        <section className="relative z-10 py-16 bg-neutral-100 dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-neutral-800 dark:text-neutral-100">
              Te gustaria ordenar tu propio producto?
            </h2>
            <p className="text-center mb-8 text-neutral-600 dark:text-neutral-300">
              Envianos un mensaje y dejanos saber que proximo producto te gustaria ver en la tienda o pedirlo
              directamente con nosotros!
            </p>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <Input type="email" placeholder="Tu Email" className="w-full" />
              </div>
              <div className="mb-4">
                <Textarea placeholder="Describe el producto que estas buscando" className="w-full" />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Enviar pedido
              </Button>
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-200 dark:bg-neutral-800 py-6">
        <div className="container mx-auto px-4 text-center text-neutral-600 dark:text-neutral-300">
          <p>&copy; 2023 SiniShop. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="mx-2 hover:text-neutral-800 dark:hover:text-neutral-100">
              Privacy Policy
            </a>
            <a href="#" className="mx-2 hover:text-neutral-800 dark:hover:text-neutral-100">
              Terms of Service
            </a>
            <a href="#" className="mx-2 hover:text-neutral-800 dark:hover:text-neutral-100">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

