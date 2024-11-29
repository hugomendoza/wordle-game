import { bgDark, bgLight, switchMoon, switchSun } from "../assets"
import { useWordleGameStore } from "../store"

export const ButtonDarkMode = () => {
  const darkMode = useWordleGameStore((state) => state.darkMode)
  const setDarkMode = useWordleGameStore((state) => state.setDarkMode)
  
  return (
    <button
      className="w-[60px] h-[30px] relative rounded-full"
      onClick={() => setDarkMode(!darkMode)}
    >
      <img
        src={`${darkMode ? bgDark : bgLight }`}
        alt="background image buttom"
        className="w-full h-full object-cover object-center rounded-full"
      />
      <img
        src={`${darkMode ? switchMoon : switchSun }`}
        alt="icon button dark mode"
        className={`${darkMode ? 'translate-x-0' : 'translate-x-[29px]'} absolute w-[24px] h-[24px] top-[3px] left-[3px] transition-all duration-200`}
      />
    </button>
  )
}
