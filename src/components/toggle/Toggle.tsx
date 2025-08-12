import { FC } from "react";

interface ToggleProps {
    view: "list" | "grid";
    onToggle: (view: "list" | "grid") => void;
}

const Toggle: FC<ToggleProps> = ({ view, onToggle }) => {
    return (
        <div>
            <button
                onClick={() => onToggle("list")}
                disabled={view === "list"}
            >
                List View
            </button>
            <button
                onClick={() => onToggle("grid")}
                disabled={view === "grid"}
            >
                Grid View
            </button>
        </div>
    );
}

export { Toggle }