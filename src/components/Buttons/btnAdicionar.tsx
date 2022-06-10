import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { ElementType } from "react";

export interface BotaoAdicionarProps extends ButtonProps{
    labelButton?: string;
    iconButton? : ElementType;
    bg?: string;
}

export function BotaoAdicionar({iconButton, labelButton, bg, ...rest}) {
  return (
    <Button
      bg={bg}
      variant="solid"
      h="8"
      borderRadius="full"
      size="lg"
      fontWeight="normal"
      {...rest}
    >
      {iconButton && (<Icon as={iconButton} />)}
      {labelButton}
    </Button>
  );
}
