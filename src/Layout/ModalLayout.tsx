interface Options {
  open: boolean;
  children: JSX.Element | JSX.Element[]
}

export const ModalLayout = ({open, children}: Options) => {
  return (
    <section
      className={`fixed inset-0 bg-white bg-opacity-90 ${open ? 'grid' : 'hidden'} place-items-center dark:bg-grey-700`}
    >
      <div
        className="bg-grey-100 pt-10 px-6 pb-4 rounded-md dark:bg-grey-800 border border-black dark:border-grey-150 text-black dark:text-white max-w-[546px] mx-auto"
      >
        {children}
      </div>
    </section>
  )
}
