import { NumberInput } from '@mantine/core';
import { NumericalResponse } from '../../parser/types';

type inputProps = {
  response: NumericalResponse;
  disabled: boolean;
  answer: any;
};
export default function NumericInput({
  response,
  disabled,
  answer
}: inputProps) {
  const { prompt, required, min, max, placeholder } = response;

  return (
    <>
      <NumberInput
        disabled={disabled}
        placeholder={placeholder}
        label={prompt}
        withAsterisk={required}
        radius={'md'}
        size={'md'}
        min={min}
        max={max}
        {...answer}
      />
    </>
  );
}
