import Link from "next/link";
import { CiStar } from "react-icons/ci";
import Image from "next/image";
import { FaHeart, FaSearch, FaShoppingCart, FaStar, FaSyncAlt } from "react-icons/fa";
import { Product } from "../type";


interface ProductProps {
  produit: Product;
}

export default function ProductItem({ produit }: ProductProps) {
    return (
        <div
        key={produit.id}
        className="group product-item w-64 sm:w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-500 hover:shadow-2xl"
      >
        <Link href={`/produit/${produit.id}`}>
          <div className="overflow-hidden relative w-full h-56">
            <Image
              src={produit.image}
              alt={produit.name}
              layout="fill"
              objectFit="cover"
              className="w-[100%] h-auto transition duration-500 group-hover:scale-110 rounded-t-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center transition duration-500 opacity-0 group-hover:bg-white/70 group-hover:opacity-100">
              <Link className="btn-square transition ml-5 duration-300 delay-0 mt-24 group-hover:mt-0 group-hover:opacity-100 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white rounded-lg p-2" href="">
                <FaShoppingCart />
              </Link>
              <Link className="btn-square transition ml-5 duration-300 delay-75 mt-24 group-hover:mt-0 group-hover:opacity-100 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white rounded-lg p-2" href="">
                <FaHeart />
              </Link>
              <Link className="btn-square transition ml-5 duration-300 delay-150 mt-24 group-hover:mt-0 group-hover:opacity-100 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white rounded-lg p-2" href="">
                <FaSyncAlt />
              </Link>
              <Link className="btn-square transition ml-5 duration-300 delay-200 mt-24 group-hover:mt-0 group-hover:opacity-100 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white rounded-lg p-2" href="">
                <FaSearch />
              </Link>
            </div>
          </div>
        </Link>
        <div className="px-5 pb-5">
          <Link href="#">
            <h5 className="text-gray-800 text-lg font-semibold dark:text-gray-200">
              {produit.name}
            </h5>
          </Link>
          <div className="text-center mt-2.5 mb-5">
            <div className="flex justify-center items-center space-x-1 rtl:space-x-reverse">
              <CiStar className="bg-yellow-400" />
              <CiStar />
              <CiStar />
              <CiStar />
              <FaStar className="text-yellow-400" />
            </div>
            <p className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              {produit.price}
            </p>
          </div>
        </div>
      </div>
    );
}