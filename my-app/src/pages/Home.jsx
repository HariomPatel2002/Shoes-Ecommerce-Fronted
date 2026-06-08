import shoes1 from '../assets/images/shoes1.jpeg'
import shoes2 from '../assets/images/shoes2.jpeg'
import shoes3 from '../assets/images/shoes3.jpeg'
import shoes4 from '../assets/images/shoes4.jpeg'

function Home() {
    const categories = [
        { id: 1, image: shoes1, label: "Men's Shoes" },
        { id: 2, image: shoes2, label: "Women's Shoes" },
        { id: 3, image: shoes3, label: "Kid's Shoes" },
        { id: 4, image: shoes4, label: "Running Shoes" },
        { id: 5, image: shoes4, label: "Casual Shoes" },
        { id: 6, image: shoes4, label: "Sports Shoes" },
    ];

    const products = [
        { id: 1, image: shoes1, brand: "NIKE", name: "AIR MAKE 270", rating: "★★★★★", price: "$120" },
        { id: 2, image: shoes1, brand: "NIKE", name: "AIR MAKE 270", rating: "★★★★★", price: "$120" },
        { id: 3, image: shoes1, brand: "NIKE", name: "AIR MAKE 270", rating: "★★★★★", price: "$120" },
        { id: 4, image: shoes1, brand: "NIKE", name: "AIR MAKE 270", rating: "★★★★★", price: "$120" },
        { id: 5, image: shoes1, brand: "NIKE", name: "AIR MAKE 270", rating: "★★★★★", price: "$120" },
        { id: 6, image: shoes1, brand: "NIKE", name: "AIR MAKE 270", rating: "★★★★★", price: "$120" },
    ];

    return (
        <div className="w-full grid grid-cols-2 gap-5 bg-white">

            {/* Hero Section */}
            <div className="flex flex-col justify-center gap-4 p-10">
                <span className="text-base text-gray-500 uppercase">
                    New collections 2026
                </span>

                <div className="flex flex-col">
                    <span className="text-white text-5xl font-bold mb-2">
                        STEP INTO
                    </span>
                    <span className="text-red-600 text-5xl font-bold">
                        EXTRAORDINARY
                    </span>
                </div>

                <span className="text-base text-gray-700 max-w-md leading-relaxed">
                    Discover the latest sneakers that combine style,
                    comfort and performance. Elevate your everyday with
                    SNEAKO.
                </span>

                <div className="flex gap-4 mt-5">
                    <button className="px-6 py-3 rounded-2xl bg-gray-900 text-white cursor-pointer">
                        Shop Men
                    </button>

                    <button className="px-6 py-3 rounded-2xl bg-white text-gray-900 border cursor-pointer">
                        Shop Women
                    </button>
                </div>
            </div>

            {/* Hero Image */}
            <div className="bg-gray-100">
                {/* Image Here */}
            </div>

            {/* Shop By Category */}
            <div className="col-span-2 w-full py-10">
                <div className="mb-8 ml-16">
                    <h2 className="text-[32px] font-bold text-[#111]">
                        SHOP BY CATEGORY
                    </h2>
                </div>

                <div className="flex gap-4 ml-16 overflow-x-auto pr-16">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="shrink-0 w-[198.67px] flex flex-col items-center gap-2"
                        >
                            <img
                                src={category.image}
                                alt={category.label}
                                className="w-[198.67px] h-[198.67px] object-cover"
                            />
                            <span className="w-full text-center text-sm text-gray-600">
                                {category.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trending Section */}
            <div className="col-span-2 w-full py-10">
                <div className="flex justify-between items-center mx-16 mb-8">
                    <h2 className="text-[32px] font-bold text-[#111]">
                        TRENDING NOW
                    </h2>

                    <button className="px-5 py-2.5 border border-[#111] text-[#111] rounded-md text-sm font-medium hover:bg-[#111] hover:text-white transition">
                        View All
                    </button>
                </div>

                <div className="flex gap-4 ml-16 overflow-x-auto pr-16">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="shrink-0 w-[342px] flex flex-col gap-3"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-[342px] object-cover block"
                            />

                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-gray-500 uppercase font-semibold">
                                    {product.brand}
                                </span>

                                <span className="text-base font-semibold text-[#111]">
                                    {product.name}
                                </span>

                                <span className="text-xs text-orange-400">
                                    {product.rating}
                                </span>

                                <span className="text-sm font-bold text-[#111]">
                                    {product.price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Home;