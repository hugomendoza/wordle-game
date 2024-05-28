import { useContext, useEffect, useRef } from 'react'
import { GameContext } from '../context';

type InputProps = {
  length?: number;
}

export const OTPBox = ({ length = 5 }: InputProps) => {

  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null))
  const { OTP, setOTP } = useContext(GameContext)

  const onTextChange = (input: string, index: number) => {
    const newOTP = [...OTP];
    newOTP[index] = input;
    setOTP(newOTP);

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    } else if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);
  console.log(OTP);

  return(
    <div className='grid grid-cols-5 gap-1'>
      {Array.from({ length }, (_, index) => (
        <input
          autoFocus
          key={index}
          type='text'
          value={OTP[index] || ''}
          onChange={(e) => onTextChange(e.target.value, index)}
          ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
          maxLength={1}
          className='border border-solid border-border-slate-500 focus:border-blue-600 p-5'
        />
      ))}
    </div>
  )
}