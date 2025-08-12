import { useState, useEffect, FC } from "react";
import { TextField } from "../text-field";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            onSearch(value);
        }, 500);
        return () => clearTimeout(timeout);
    }, [value, onSearch]);

    return (
        <TextField
            type="text"
            placeholder="Search products..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            label="Search"
            name="search"
        />
    );
}

export { SearchBar }