import * as DialogPrimitive from "@radix-ui/react-dialog";
import { styled, theme } from "../stitches.config";
import { Cross1Icon } from "@radix-ui/react-icons";

type DialogProps = DialogPrimitive.DialogProps & {
  children: React.ReactNode;
};

const Dialog = ({ children, ...props }: DialogProps) => {
  return (
    <DialogPrimitive.Root>
      <Overlay />
      {children}
      <Content>
        <Title>Details</Title>
        <DialogPrimitive.Description>
          A collection of custom Cypress commands to help select common
          components
        </DialogPrimitive.Description>
        <Close>
          <Cross1Icon style={{ width: "16px", height: "16px" }} />
        </Close>
      </Content>
    </DialogPrimitive.Root>
  );
};

export default Dialog;

export const DialogTrigger = DialogPrimitive.Trigger;

const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  height: "100vh",
  width: "100vw",
});

const Content = styled(DialogPrimitive.Content, {
  backgroundColor: "$accent",
  position: "fixed",
  bottom: 0,
  width: "100vw",
  height: "66vh",
  maxWidth: "512px",
  maxHeight: "85vh",
  padding: "16px",
  border: `1px solid $border`,
  borderTopRightRadius: "16px",
  borderTopLeftRadius: "16px",

  "@bp1": {
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    height: "auto",
  },
});

const Title = styled(DialogPrimitive.Title, {
  fontSize: "18px",
  fontWeight: "900",
  marginBlockStart: "0",
  marginBlockEnd: "0",
  letterSpacing: "-0.5px",
});

const Close = styled(DialogPrimitive.Close, {
  backgroundColor: "rgba(0, 0, 0, 0)",
  border: "none",
  position: "absolute",
  top: "16px",
  right: "16px",
  padding: "0",
  transition: "ease-in-out 0.1s",

  "&:hover": {
    color: "$primary",
    cursor: "pointer",
  },
});
