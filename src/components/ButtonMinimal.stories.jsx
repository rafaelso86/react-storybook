// Button.stories.js|jsx
import ButtonMinimal from "./ButtonMin";

export default {
    title: 'Components/Button',
    component: ButtonMinimal,
}

export const Minimal = {
    args: {
      label: 'Minimal',
      primary: true,
    },
};
