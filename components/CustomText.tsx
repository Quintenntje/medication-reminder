import { Text, useColorScheme } from "react-native";

interface TextProps {
    children?: React.ReactNode;
    className?: string;
    variant?: 'small' | 'body' | 'heading' | 'subheading';
}



function CustomText(  { children, className, variant = 'body' }: TextProps)
 {
    const colorScheme = useColorScheme();


     switch ( variant ) {
        case 'heading':
            return ( <Text
                className={`font-bold text-4xl ${
                    colorScheme === "dark" ? "text-white" : "text-gray-900"
                }`
            + (className ? ` ${className}` : '')}
            >
                {children}
            </Text> );
        case 'subheading':
            return ( <Text
                className={`text-2xl mt-4 mx-4 ${
                    colorScheme === "dark" ? "text-white" : "text-gray-900"
                }`
            + (className ? ` ${className}` : '')}
            >
                    {children}
            </Text>
            )
        case 'body':
            return <Text className={`${
                    colorScheme === "dark" ? "text-white" : "text-gray-900"
                }`
                + (className ? ` ${className}` : '')}
            ></Text>;
        case 'small':
            return <Text className={` text-sm ${
                    colorScheme === "dark" ? "text-white" : "text-gray-900"
                }`
                + (className ? ` ${className}` : '')}
            >
                {children}
            </Text>;
        default:
            return <Text className={`${
                    colorScheme === "dark" ? "text-white" : "text-gray-900"
                }`
                + (className ? ` ${className}` : '')}
            ></Text>;
        }


}

export default CustomText;