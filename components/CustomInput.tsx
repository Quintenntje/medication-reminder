import {TextInput, useColorScheme} from 'react-native';



interface CustomInputProps {
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    classname?: string;
}

function CustomInput(props: CustomInputProps) {
    const { value, onChange, placeholder, secureTextEntry, classname } = props;
    const colorScheme = useColorScheme();

    return (
        <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            placeholderTextColor={colorScheme === "dark" ? "#d1d5db" : "#6b7280"}
            secureTextEntry={secureTextEntry}
            className={` ${colorScheme === "dark" ? "bg-gray-800 text-gray-100 border-gray-700" : "bg-white text-gray-900 border-gray-300"} rounded-lg px-4 py-3 border text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-400  ${classname}`}
        />
    );
}

export default CustomInput;