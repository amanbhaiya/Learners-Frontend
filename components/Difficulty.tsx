import { cn, toCapitalCase } from "@/lib/functions";
import Badge from "@/components/Badge";
import { Size } from "@/lib/types";

type DifficultyVariant = "beginner" | "intermediate" | "advanced";

const difficultyToBadgeVariant: Record<DifficultyVariant, "success" | "warning" | "danger"> = {
    beginner: "success",
    intermediate: "warning",
    advanced: "danger"
};

const Difficulty = ({
    variant,
    size = "sm"
}: {
    variant: DifficultyVariant;
    size?: Size;
}) => {
    return (
        <Badge variant={difficultyToBadgeVariant[variant]} size={size}>
            {toCapitalCase(variant)}
        </Badge>
    );
};

export default Difficulty;
