interface Options {
  value: string;
  onOpress?: () => void;
}

export const Button = ({value = '', onOpress}: Options) => {
  return (
    <button
      onClick={onOpress}
      className="min-w-[236px] bg-green h-[50px] grey place-items-center text-2xl text-white font-extrabold rounded-md mx-auto"
    >
      {value}
    </button>
  )
}
