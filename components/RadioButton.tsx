import { TouchableOpacity, View, Text } from "react-native";

interface RadioButtonProps {
    label: string;
    checked: boolean;
    onPress: () => void;
    className?: string;
}

function RadioButton({ label, checked, onPress, className = "" }: RadioButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`flex-row items-center ${className}`}
            activeOpacity={0.7}
        >
            <View className={`w-5 h-5 rounded-full border-2 ${checked ? "border-blue-500" : "border-gray-400"} flex items-center justify-center mr-2`}>
                {checked && <View className="w-3 h-3 rounded-full bg-blue-500" />}
            </View>
            <Text className="text-base">{label}</Text>
        </TouchableOpacity>
    );
}

export default RadioButton;