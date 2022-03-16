import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { ElementType } from "react";

export interface BotaoAdicionarProps extends ButtonProps{
    labelButton?: string;
    iconButton? : ElementType;
}

export function BotaoAdicionar({iconButton, labelButton, ...rest}) {
  return (
    <Button
      leftIcon={<Icon as={iconButton} />}
      bg="green.700"
      variant="solid"
      h="8"
      borderRadius="full"
      size="lg"
      fontWeight="normal"
      {...rest}
    >
      {labelButton}
    </Button>
  );
}
