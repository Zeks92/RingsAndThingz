import "../../styles/globals.css";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "./card";
import { list } from "@/api/api";
import { Product } from "../models/models";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

const fetchProducts = async (): Promise<Product[]> => {
  const response = await list("/products/section/list/recommendation");
  return response.payload.items;
};

const Slider: React.FC = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <div className="w-8 h-8 border-4 border-t-4 border-t-transparent border-gray-400 rounded-full animate-spin"></div>
      </div>
    );
  if (error) return <p>Error fetching products</p>;

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      loop={false}
      scrollbar={{ draggable: true }}
      modules={[Scrollbar]}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {products?.map((product: Product) => (
        <SwiperSlide key={product.id}>
          <Card product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
