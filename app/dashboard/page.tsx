"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Menu, LayoutGrid, Box, ShirtIcon, Home, Tag, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const cards = [
  {
    id: 1,
    title: "Product 1",
    type: "Electronics",
    images: [
      "/placeholder.svg?height=300&width=300&text=Product+1+Image+1",
      "/placeholder.svg?height=300&width=300&text=Product+1+Image+2",
      "/placeholder.svg?height=300&width=300&text=Product+1+Image+3",
    ],
  },
  {
    id: 2,
    title: "Product 2",
    type: "Clothing",
    images: [
      "/placeholder.svg?height=300&width=300&text=Product+2+Image+1",
      "/placeholder.svg?height=300&width=300&text=Product+2+Image+2",
      "/placeholder.svg?height=300&width=300&text=Product+2+Image+3",
    ],
  },
  {
    id: 3,
    title: "Product 3",
    type: "Home & Garden",
    images: [
      "/placeholder.svg?height=300&width=300&text=Product+3+Image+1",
      "/placeholder.svg?height=300&width=300&text=Product+3+Image+2",
      "/placeholder.svg?height=300&width=300&text=Product+3+Image+3",
    ],
  },
  {
    id: 4,
    title: "Product 4",
    type: "Electronics",
    images: [
      "/placeholder.svg?height=300&width=300&text=Product+4+Image+1",
      "/placeholder.svg?height=300&width=300&text=Product+4+Image+2",
      "/placeholder.svg?height=300&width=300&text=Product+4+Image+3",
    ],
  },
  {
    id: 5,
    title: "Product 5",
    type: "Clothing",
    images: [
      "/placeholder.svg?height=300&width=300&text=Product+5+Image+1",
      "/placeholder.svg?height=300&width=300&text=Product+5+Image+2",
      "/placeholder.svg?height=300&width=300&text=Product+5+Image+3",
    ],
  },
  {
    id: 6,
    title: "Product 6",
    type: "Home & Garden",
    images: [
      "/placeholder.svg?height=300&width=300&text=Product+6+Image+1",
      "/placeholder.svg?height=300&width=300&text=Product+6+Image+2",
      "/placeholder.svg?height=300&width=300&text=Product+6+Image+3",
    ],
  },
  {
    id: 7,
    title: "Product 7",
    type: "Electronics",
    images: [
      "/placeholder.svg?height=300&width=300&text=Product+7+Image+1",
      "/placeholder.svg?height=300&width=300&text=Product+7+Image+2",
      "/placeholder.svg?height=300&width=300&text=Product+7+Image+3",
    ],
  },
  {
    id: 8,
    title: "Product 8",
    type: "Clothing",
    images: [
      "/placeholder.svg?height=300&width=300&text=Product+8+Image+1",
      "/placeholder.svg?height=300&width=300&text=Product+8+Image+2",
      "/placeholder.svg?height=300&width=300&text=Product+8+Image+3",
    ],
  },
  {
    id: 9,
    title: "Product 9",
    type: "Home & Garden",
    images: [
      "/placeholder.svg?height=300&width=300&text=Product+9+Image+1",
      "/placeholder.svg?height=300&width=300&text=Product+9+Image+2",
      "/placeholder.svg?height=300&width=300&text=Product+9+Image+3",
    ],
  },
]

function ProductCard({ card }: { card: (typeof cards)[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % card.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + card.images.length) % card.images.length)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-72 w-full">
        <Image
          src={card.images[currentImageIndex] || "/placeholder.svg"}
          alt={`${card.title} - Image ${currentImageIndex + 1}`}
          layout="fill"
          objectFit="cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
        <p className="text-sm text-gray-600">Category: {card.type}</p>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("all-content")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCards, setFilteredCards] = useState(cards)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setSearchTerm("") // Clear the search term when changing categories
    setIsSidebarOpen(false)
  }

  useEffect(() => {
    let results = cards

    // Apply category filter
    if (selectedCategory !== "all-content") {
      results = results.filter((card) => card.type.toLowerCase() === selectedCategory.toLowerCase())
    }

    // Apply search term filter
    if (searchTerm) {
      results = results.filter(
        (card) =>
          card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.type.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredCards(results)
  }, [searchTerm, selectedCategory])

  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-800">
      {/* Top Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-2"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="text-2xl font-bold">
              SiniShop
            </Link>
          </div>
          <div className="flex-1 max-w-xl mx-4">
            <Input
              type="text"
              placeholder="Search all products..."
              className="w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setSelectedCategory("all-content")}
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside
          className={`bg-white shadow-md w-64 fixed inset-y-0 left-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 transition duration-200 ease-in-out z-10`}
        >
          <div className="flex flex-col h-full md:pt-0 pt-16">
            <div className="p-4">
              <nav>
                <ul className="space-y-2">
                  <li>
                    <Button
                      variant={selectedCategory === "all-content" ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => handleCategoryChange("all-content")}
                    >
                      <LayoutGrid className="mr-2 h-4 w-4" />
                      All Products
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="p-4 border-t">
              <h2 className="text-xs font-semibold text-gray-500 mb-2">CATEGORIES</h2>
              <ul className="space-y-1">
                {[
                  { name: "Electronics", icon: Box },
                  { name: "Clothing", icon: ShirtIcon },
                  { name: "Home & Garden", icon: Home },
                  { name: "Deals", icon: Tag },
                ].map((item, index) => (
                  <li key={index}>
                    <Button
                      variant={selectedCategory === item.name ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => handleCategoryChange(item.name)}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Tabs */}
          <Tabs defaultValue="recent" className="mb-6">
            <TabsList>
              <TabsTrigger value="recent">New Arrivals</TabsTrigger>
              <TabsTrigger value="starred">Best Sellers</TabsTrigger>
              <TabsTrigger value="shared">On Sale</TabsTrigger>
            </TabsList>
            <TabsContent value="recent">
              {/* Product Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCards.map((card) => (
                  <ProductCard key={card.id} card={card} />
                ))}
              </div>
              {filteredCards.length === 0 && <p className="text-center text-gray-500 mt-4">No products found</p>}
            </TabsContent>
            <TabsContent value="starred">Best Sellers content goes here</TabsContent>
            <TabsContent value="shared">On Sale content goes here</TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

