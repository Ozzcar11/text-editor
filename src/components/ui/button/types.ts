export type ButtonProps = {
  disabled?: boolean;
  icon?: string;
  variant?: "primary" | "text";
};

export type ButtonEmits = {
  (e: "click", value: Event): void;
};

export const ButtonPropsDefaults = {
  disabled: false,
} as const;
