import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import Select from "react-select";

// Options for the dropdown
const options = [
    { value: "chicago", label: "Chicago, New York" },
    { value: "los_angeles", label: "Los Angeles" },
    { value: "san_francisco", label: "San Francisco" },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        width: "100%",
        height: "3rem",
        backgroundColor: "white",
        borderRadius: "0.75rem",
        borderColor: "#d1d5db", // gray-300
        display: "flex",
        alignItems: "center",
        paddingLeft: "1rem", // to add space for the icon
        paddingRight: "1rem",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        boxShadow: "none",
        "&:hover": {
            borderColor: "#8D448B", // #8D448B on hover
        },
        "&:focus-within": {
            borderColor: "#8D448B",
            boxShadow: "0 0 0 2px rgba(141, 68, 139, 0.3)", // focus ring
        },
    }),
    option: (provided) => ({
        ...provided,
        padding: "0.75rem 1rem", // matching padding for options
        fontWeight: "500",
        fontSize: "1rem",
    }),
    // Replace the default dropdown arrow with location pin icon
    dropdownIndicator: (provided) => ({
        ...provided,
        color: "#6B7280", // gray-500 for dropdown icon color
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0", // Remove padding to center the icon
    }),
    // Style for the location icon inside the dropdown
    indicatorSeparator: () => ({
        display: "none", // Remove the separator line
    }),
    clearIndicator: () => ({
        display: "none", // Hide the clear button (if not needed)
    }),
};

const DropdownWithLocationPin = () => {
    return (
        <div className="relative">
            <Select
                id="workspace"
                options={options}
                styles={customStyles}
                classNamePrefix="react-select" // Add prefix for custom styles
                placeholder="Select a location"
                components={{
                    DropdownIndicator: () => (
                        <MdOutlineLocationOn className="h-7 w-7 text-gray-600" />
                    ), // Custom dropdown indicator (location pin)
                }}
            />
        </div>
    );
};

export default DropdownWithLocationPin;
