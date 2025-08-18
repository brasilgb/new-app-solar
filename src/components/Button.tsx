import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ButtonProps {
    label?: any
    className?: string
}
const Button = ({ label, ...props }: ButtonProps) => {
    
    return (
        <TouchableOpacity
        {...props}
        >
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button