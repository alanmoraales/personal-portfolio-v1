import { FC } from "react";
import { Textarea as BaseTextArea, Stack, Text } from "@chakra-ui/react";
import { TextAreaProps } from "./TextAreaProps";

export const TextArea: FC<TextAreaProps> = ({
  label,
  ...baseTextAreaProps
}) => {
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
      <BaseTextArea
        border="none"
        borderRadius="0px"
        id={label}
        {...baseTextAreaProps}
      />
    </Stack>
  );
};
