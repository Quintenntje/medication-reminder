import { TouchableOpacity, Text, useColorScheme } from "react-native";

interface RadioButtonProps {
    label: string;
    checked: boolean;
    onPress: () => void;
    className?: string;
}


function RadioButton({ label, checked, onPress, className = "" }: RadioButtonProps) {
    const colorScheme = useColorScheme();

    const borderColor = checked
        ? "border-blue-500"
        : colorScheme === "dark"
            ? "border-gray-700"
            : "border-gray-300";
    const bgColor = checked
        ? colorScheme === "dark"
            ? "bg-blue-900"
            : "bg-blue-50"
        : colorScheme === "dark"
            ? "bg-gray-800"
            : "bg-white";
    const textColor = checked
        ? colorScheme === "dark"
            ? "text-blue-300"
            : "text-blue-700"
        : colorScheme === "dark"
            ? "text-gray-100"
            : "text-gray-800";

    return (
        <TouchableOpacity
            onPress={onPress}
            className={`px-4 py-4 rounded-md border ${borderColor} ${bgColor} flex items-center justify-center  ${className}`}
            activeOpacity={0.7}
        >
            <Text className={`text-base ${textColor} ${checked ? "font-semibold" : ""}`}>{label}</Text>
        </TouchableOpacity>
    );
}

export default RadioButton;