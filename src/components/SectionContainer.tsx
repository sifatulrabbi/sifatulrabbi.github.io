const SectionContainer: React.FC<{
  id: string
  children: React.ReactNode
  className?: string
}> = ({ children, id, className }) => {
  return (
    <section
      id={id}
      className={
        "flex flex-col justify-center items-center px-4 md:px-5 lg:px-6 xl:px-7 w-full max-w-screen overflow-x-hidden h-max my-[10vh] py-1" +
        (className || "")
      }
    >
      {children}
    </section>
  )
}

export default SectionContainer
