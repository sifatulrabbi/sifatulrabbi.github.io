# My Portfolio

I've built this portfolio by being inspired by the terminal where I spent most of my time as a software developer.

## Underlying structure

This terminal is not connected to shell or any VM via any protocol. Its a complete emulation. I like the terminal and was curious how it would be built if I try building it from scratch. At the time I did not have any experience or knowledge of building shell in Linux or MacOS so I thought why not use the web as the canvas to paint my imagination.

### Terminal Emulation

Instead of building the entire shell and file system I just took what is needed for my portfolio. In the `terminalMode.d.ts` file there are:

- `TerminalHistory` contains an input and its output if the input was a valid command.
- `TerminalModeContext` React context's type used for the terminal components. It contains all the history and the current directory path.
- `FileEntry` an entry that's either a file or file with children (directory). These are HTML or markdown formatted content that the terminal history component will display with styles.
- `TerminalExitCode` either 0 or 1 where 0 is success and 1 is error.

### Process of executing a command

When a command is entered in the input the current setup follows these steps to finally produce a `TerminalHistory` that gets printed on the terminal's history container.

## AI Coding tools are involved

Parts of the UI is done with [Claude.ai/code](https://claude.ai/code) to speed up the UI refactoring. However, the core logic of the terminal, the history, command execution, the React context, were done by manual coding.
