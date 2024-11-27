interface Options {
  value: string;
  onOpress?: () => void;
}

export const Button = ({value = '', onOpress}: Options) => {
  return (
    <button
      onClick={onOpress}
      className="min-w-[14rem] bg-green h-[3rem] grey place-items-center text-xl text-white font-extrabold rounded-md mx-auto"
    >
      {value}
    </button>
  )
}
