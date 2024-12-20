interface Options {
  open: boolean;
  children: JSX.Element | JSX.Element[]
}

export const ModalLayout = ({open, children}: Options) => {
  return (
    <section
      className={`fixed inset-0 bg-white/90 ${open ? 'grid' : 'hidden'} place-items-center dark:bg-grey-700/90 overflow-y-scroll py-6`}
    >
      <div
        className="bg-grey-100 pt-10 px-6 pb-6 rounded-md dark:bg-grey-800 border border-black dark:border-grey-150 text-black dark:text-white max-w-[520px] mx-auto dark:border-grey"
      >
        {children}
      </div>
    </section>
  )
}
