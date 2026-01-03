import { FiStar } from "react-icons/fi";
import { FaStarHalfAlt } from "react-icons/fa";
import { cn } from "@/lib/functions";

export interface StarRatingProps {
    rating: number;
    max?: number;
    className?: string
}

const StarRating = ({ rating, max = 5, className = "" }: StarRatingProps) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = max - Math.ceil(rating);
    return (
        <div className={cn("flex gap-1", className)}>
            {/* Full stars */}
            {Array.from({ length: fullStars }).map((_, i) => (<FiStar key={`full-${i}`} className="w-5 h-5 text-yellow-500 fill-current" />))}
            {/* Half star */}
            {hasHalfStar ? (<FaStarHalfAlt className="w-5 h-5 text-yellow-500" />) : (<FiStar className="w-5 h-5 text-gray-300" />)}
            {/* Empty stars */}
            {Array.from({ length: emptyStars }).map((_, i) => (<FiStar key={`empty-${i}`} className="w-5 h-5 text-gray-300" />))}
        </div>
    );
};

export default StarRating;

