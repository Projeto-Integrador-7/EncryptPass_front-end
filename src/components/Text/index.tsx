import { Text } from "@chakra-ui/react";

export type TitleProps = {
  title?: string;
};

export function Title({ title }: TitleProps) {
  return (
    <Text fontSize="20">
      {title}
    </Text>
  );
}
