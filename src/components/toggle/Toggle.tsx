import { FC } from "react";
import { Button } from "../button";

import "./Toggle.css"

interface ToggleProps {
    view: "list" | "grid";
    onToggle: (view: "list" | "grid") => void;
}

const Toggle: FC<ToggleProps> = ({ view, onToggle }) => {
    return (
        <div className="toggle-container">
            <Button
                onClick={() => onToggle("list")}
                disabled={view === "list"}
            >
                List View
            </Button>
            <Button
                onClick={() => onToggle("grid")}
                disabled={view === "grid"}
            >
                Grid View
            </Button>
        </div>
    );
}

export { Toggle };
