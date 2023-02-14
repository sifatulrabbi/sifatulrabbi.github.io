const SectionContainer: React.FC<{
  id?: string
  children: React.ReactNode
  className?: string
  noMargin?: boolean
}> = ({ children, id, className, noMargin }) => {
  return (
    <section
      id={id}
      className={
        "flex flex-col justify-center items-center px-4 md:px-[5vw] lg:px-[8vw] xl:px-[10vw] w-full max-w-screen overflow-x-hidden h-max py-1 " +
        (noMargin ? "" : "my-[10vh]") +
        (className || "")
      }
    >
      {children}
    </section>
  )
}

export default SectionContainer
