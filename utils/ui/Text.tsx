import { createText } from "@shopify/restyle";
import { Theme } from "../theme";

const Text = createText<Theme>();
export type BoxProps = typeof Text;
export default Text;