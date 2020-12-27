import { FC } from "react";
import { Stack, Input as BaseInput, Text } from "@chakra-ui/react";
import { InputProps } from "./InputProps";

export const Input: FC<InputProps> = ({ label, ...baseInputProps }) => {
  return (
    <Stack
      bg="#F9F9F9"
      borderStyle="solid"
      borderWidth="0.5px"
      borderColor="#3A3A3A"
      spacing="0px"
    >
      <label htmlFor={label}>
        <Text fontSize="sm" p="5px 1rem">
          {label}
        </Text>
      </label>
      <BaseInput
        border="none"
        borderRadius="0px"
        id={label}
        {...baseInputProps}
      />
    </Stack>
  );
};
